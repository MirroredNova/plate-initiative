import Link from "next/link";
import React from "react";
import FooterSignupForm from "./FooterSignupForm";

const Footer = () => (
  <footer className="bg-primary_dark text-primary_light">
    <div className="px-5 sm:px-12 py-10 sm:py-24 flex gap-4 flex-col sm:flex-row place-content-between text-lg max-w-6xl m-auto">
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
            href="/mission"
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
      <FooterSignupForm />
    </div>
  </footer>
);

export default Footer;
