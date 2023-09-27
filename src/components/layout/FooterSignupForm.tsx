"use client";

import { validateEmail } from "@/services/util.services";
import React, { useRef } from "react";

const FooterSignupForm = () => {
  const email = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = React.useState(false);
  const [emailSuccess, setEmailSuccess] = React.useState(false);

  const signupHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email.current?.value && validateEmail(email.current?.value)) {
      fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: email.current?.value }),
      });
      email.current.value = "";
      setEmailSuccess(true);
      setTimeout(() => {
        setEmailSuccess(false);
      }, 3000);
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className="font-alice flex flex-col items-start gap-6 text-base place-content-between">
      <p>Sign up to receive news and updates</p>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="p-3.5 focus:outline-none text-secondary_dark min-w-0 w-full max-w-[250px]"
          ref={email}
          onChange={() => setEmailError(false)}
        />
        {emailError && (
          <p className="text-red-400 font-extrabold">Invalid Email!</p>
        )}
        {emailSuccess && (
          <p className="font-extrabold">Submission Successful!</p>
        )}
      </div>
      <button
        className="block px-8 py-2 rounded-full border-2 hover:bg-white hover:text-primary_dark transition-all duration-300 ease-in-out"
        onClick={signupHandler}
      >
        SIGN UP
      </button>
    </div>
  );
};

export default FooterSignupForm;
