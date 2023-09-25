"use client";

import React from "react";
import { VOLUNTEER_ROLES } from "@/constants/constants";
import {
  VolunteerFormInterface,
  VolunteerFormRolesInterface,
} from "@/interfaces/interfaces";
import { sendVolunteerForm } from "@/services/firebase.services";
import { validateEmail, validatePhone } from "@/services/util.services";
import BodySection from "../shared/BodySection";

const NewVolunteerForm = () => {
  const [formData, setFormData] = React.useState<VolunteerFormInterface>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
  });
  const [volunteerRoles, setVolunteerRoles] = React.useState<
    VolunteerFormRolesInterface[]
  >(VOLUNTEER_ROLES.map((role) => ({ role, checked: false })));
  const [submissionSuccess, setSubmissionSuccess] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [phoneError, setPhoneError] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formData.email) || !validatePhone(formData.phone)) {
      setEmailError(!validateEmail(formData.email));
      setPhoneError(!validatePhone(formData.phone));
      return;
    }
    sendVolunteerForm({
      ...formData,
      roles: volunteerRoles
        .filter((role) => role.checked)
        .map((role) => role.role),
    });
    setSubmissionSuccess(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      experience: "",
    });
    setVolunteerRoles(
      volunteerRoles.map((role) => ({ ...role, checked: false })),
    );
    setTimeout(() => {
      setSubmissionSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmailError(false);
    }
    if (name === "phone") {
      setPhoneError(false);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setVolunteerRoles((prev) =>
      prev.map((role) =>
        role.role === value ? { ...role, checked } : { ...role },
      ),
    );
  };

  return (
    <BodySection>
      <form
        className="h-fit my-auto flex px-3 sm:px-12 pb-20 max-w-3xl flex-col font-alice text-lg items-start gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full">
          <legend className="flex flex-row items-center gap-2">
            <span>Name</span>
            <span className="text-xs text-secondary_dark opacity-75">
              (required)
            </span>
          </legend>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex flex-col w-full">
              <label htmlFor="first-name" className="text-xs">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="p-2.5 border border-secondary_mid"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="last-name" className="text-xs">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="p-2.5 border border-secondary_mid"
                required
                autoComplete="family-name"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="flex flex-row items-center gap-2">
            <span>Email Address</span>
            <span className="text-xs text-secondary_dark opacity-75">
              (required)
            </span>
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2.5 border border-secondary_mid"
            required
            autoComplete="email"
          />
          {emailError && (
            <p className="text-red-400 font-extrabold">Invalid Email!</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="phone" className="flex flex-row items-center gap-2">
            <span>Phone</span>
            <span className="text-xs text-secondary_dark opacity-75">
              (required)
            </span>
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2.5 border border-secondary_mid"
            required
            autoComplete="tel-national"
          />
          {phoneError && (
            <p className="text-red-400 font-extrabold">Invalid Phone!</p>
          )}
        </div>
        <div className="flex flex-col w-full gap-1">
          <legend className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <span>Volunteer Roles</span>
              <span className="text-xs text-secondary_dark opacity-75">
                (required)
              </span>
            </div>
            <div className="flex">
              <span className="text-xs text-secondary_dark opacity-75">
                Please select one or more options
              </span>
            </div>
          </legend>
          {VOLUNTEER_ROLES.map((role, index) => (
            <label className="text-sm" key={index}>
              <input
                id={`role-checkbox-${index}`}
                name="role-checkbox"
                value={role}
                checked={volunteerRoles[index].checked}
                onChange={handleCheckboxChange}
                type="checkbox"
                className="mr-1"
              />
              {role}
            </label>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="experience"
            className="flex flex-row items-center gap-2"
          >
            <span>What is your experience with this role?</span>
            <span className="text-xs text-secondary_dark opacity-75">
              (required)
            </span>
          </label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="p-2.5 border border-secondary_mid"
            required
          />
        </div>
        <button
          type="submit"
          className="text-accent_primary border-2 border-accent_primary rounded-full px-5 py-2 font-sofia font-bold
          hover:bg-accent_primary hover:text-white transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
        {submissionSuccess && (
          <p className="font-extrabold">
            Thank you for your contact submission!
          </p>
        )}
      </form>
    </BodySection>
  );
};

export default NewVolunteerForm;
