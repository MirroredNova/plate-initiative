import React from "react";

const NewVolunteerForm = () => (
  <section>
    <div>
      <div>
        <legend>
          <span>Name</span>
          <span>(required)</span>
        </legend>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="email">
          <span>Email Address</span>
          <span>(required)</span>
        </label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="phone">
          <span>Phone</span>
          <span>(required)</span>
        </label>
        <input id="phone" type="text" />
      </div>
      <div>
        <legend>
          <span>Volunteer Roles</span>
          <span>(required)</span>
          <span>Please select one or more options</span>
        </legend>
        <label>
          <input type="checkbox" />
          Public Outreach
        </label>
        <label>
          <input type="checkbox" />
          Fundraising
        </label>
        <label>
          <input type="checkbox" />
          Grant Writing
        </label>
        <label>
          <input type="checkbox" />
          Social Media Volunteer
        </label>
        <label>
          <input type="checkbox" />
          Admin Assistance
        </label>
        <label>
          <input type="checkbox" />
          Editing
        </label>
        <label>
          <input type="checkbox" />
          Chef Talks
        </label>
      </div>
      <div>
        <label htmlFor="experience">
          <span>What is your experience with this role?</span>
          <span>(required)</span>
        </label>
        <textarea id="experience" />
      </div>
      <button type="submit">Submit</button>
    </div>
  </section>
);

export default NewVolunteerForm;
