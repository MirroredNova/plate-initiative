"use client";

import React from "react";
import { sendContactForm } from "@/services/firebase.services";
import { ContactFormInterface } from "@/interfaces/interfaces";
import { validateEmail } from "@/services/util.services";
import BodySection from "../shared/BodySection";

const ContactForm = () => {
  const [formState, setFormState] = React.useState<ContactFormInterface>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailError, setEmailError] = React.useState(false);
  const [submissionSuccess, setSubmissionSuccess] = React.useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmailError(false);
    }
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formState.email)) {
      setEmailError(true);
      return;
    }
    sendContactForm(formState);
    setSubmissionSuccess(true);
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      setSubmissionSuccess(false);
    }, 3000);
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
                name="firstName"
                onChange={handleChange}
                value={formState.firstName}
                type="text"
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
                name="lastName"
                onChange={handleChange}
                value={formState.lastName}
                type="text"
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
            name="email"
            onChange={handleChange}
            value={formState.email}
            type="text"
            className="p-2.5 border border-secondary_mid"
            required
            autoComplete="email"
          />
          {emailError && (
            <p className="text-red-400 font-extrabold">Invalid Email!</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="subject" className="flex flex-row items-center gap-2">
            <span>Subject</span>
            <span className="text-xs text-secondary_dark opacity-75">
              (required)
            </span>
          </label>
          <input
            id="subject"
            name="subject"
            onChange={handleChange}
            value={formState.subject}
            type="text"
            className="p-2.5 border border-secondary_mid"
            required
            autoComplete="subject"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="message" className="flex flex-row items-center gap-2">
            <span>Message</span>
            <span className="text-xs text-secondary_dark opacity-75">
              (required)
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formState.message}
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

export default ContactForm;
