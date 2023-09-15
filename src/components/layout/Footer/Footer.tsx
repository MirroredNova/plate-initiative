import Link from "next/link";
import React from "react";

const Footer = () => (
  <footer className="bg-primary_dark text-primary_light">
    <div className="px-5 sm:px-12 py-10 sm:py-24 flex gap-4 flex-col sm:flex-row place-content-between text-lg">
      <div className="font-alice font-extrabold mb-28 sm:mb-0">
        <h3 className="mb-4 font-bold font-sofia">
          <Link
            className="underline decoration-secondary_mid underline-offset-4 hover:text-secondary_mid hover:transition-all"
            href="/"
          >
            © 2023
          </Link>{" "}
          TPI
        </h3>
        <div className="mb-6">
          <p>The Plate Initiative</p>
          <p>Middleton, WI 53562</p>
        </div>
        <div>
          <p>Phone: (716)-536-1113</p>
          <p>Email: zin@plateinitiative.org</p>
        </div>
      </div>
      <div className="font-alice mb-8 sm:mb-0">
        <h3 className="mb-4 font-bold font-sofia">INFO</h3>
        <p>
          <Link
            className="underline decoration-secondary_mid underline-offset-4 hover:text-secondary_mid hover:transition-all"
            href="/missions"
          >
            Mission
          </Link>
        </p>
        <p>
          <Link
            className="underline decoration-secondary_mid underline-offset-4 hover:text-secondary_mid hover:transition-all"
            href="/programs"
          >
            Programs
          </Link>
        </p>
      </div>
      <div className="font-alice mb-8 sm:mb-0">
        <h3 className="mb-4 font-bold font-sofia">ACTION</h3>
        <p>
          <Link
            className="underline decoration-secondary_mid underline-offset-4 hover:text-secondary_mid hover:transition-all"
            href="/volunteer"
          >
            Volunteer
          </Link>
        </p>
        <p>
          <Link
            className="underline decoration-secondary_mid underline-offset-4 hover:text-secondary_mid hover:transition-all"
            href="/contact"
          >
            Contact
          </Link>
        </p>
        <p>
          <Link
            className="underline decoration-secondary_mid underline-offset-4 hover:text-secondary_mid hover:transition-all"
            href="https://www.flipcause.com/secure/cause_pdetails/MTQ1MzAz"
          >
            Donate
          </Link>
        </p>
      </div>
      <div className="font-alice flex flex-col items-start gap-6 text-base place-content-between">
        <p>Sign up to receive news and updates</p>
        <input
          type="text"
          placeholder="Email Address"
          className="p-3.5 focus:outline-none text-secondary_dark min-w-0 w-full max-w-[250px]"
        />
        <button className="block px-8 py-2 rounded-full border-2 hover:bg-white hover:text-primary_dark hover:transition-all">
          SIGN UP
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
