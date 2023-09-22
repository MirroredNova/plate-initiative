import React from "react";
import BodySection from "../shared/BodySection";

const NewVolunteerForm = () => (
  <BodySection>
    <div className="h-fit my-auto flex px-3 sm:px-12 pb-20 max-w-3xl flex-col font-alice text-lg items-start gap-4 w-full">
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
          className="p-2.5 border border-secondary_mid"
          required
          autoComplete="email"
        />
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
          className="p-2.5 border border-secondary_mid"
          required
          autoComplete="tel-national"
        />
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
        <label className="text-sm">
          <input type="checkbox" className="mr-1" />
          Public Outreach
        </label>
        <label className="text-sm">
          <input type="checkbox" className="mr-1" />
          Fundraising
        </label>
        <label className="text-sm">
          <input type="checkbox" className="mr-1" />
          Grant Writing
        </label>
        <label className="text-sm">
          <input type="checkbox" className="mr-1" />
          Social Media Volunteer
        </label>
        <label className="text-sm">
          <input type="checkbox" className="mr-1" />
          Admin Assistance
        </label>
        <label className="text-sm">
          <input type="checkbox" className="mr-1" />
          Editing
        </label>
        <label className="text-sm ">
          <input type="checkbox" className="mr-1" />
          Chef Talks
        </label>
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
          className="p-2.5 border border-secondary_mid"
          required
        />
      </div>
      <button
        type="submit"
        className="text-accent_primary border-2 border-accent_primary rounded-full px-5 py-2 font-sofia font-bold"
      >
        Submit
      </button>
    </div>
  </BodySection>
);

export default NewVolunteerForm;
