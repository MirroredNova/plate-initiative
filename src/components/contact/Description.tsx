import React from "react";
import BigHeader from "../shared/BigHeader";
import BodySection from "../shared/BodySection";

const Description = () => (
  <BodySection>
    <div className="h-fit my-auto flex px-3 sm:px-12 pt-5 sm:pt-20 pb-8 max-w-3xl flex-col font-alice text-lg">
      <BigHeader>Contact Us</BigHeader>
      <div className="flex flex-col gap-6">
        <p>
          If you&apos;d like to get in touch with us, you have two options: you
          can either send us an email using the address listed below or fill out
          the form. Whether you have questions about our programming or want to
          learn more about our mission, feel free to contact us here.
        </p>
        <p>
          The Plate Initative
          <br />
          Middleton, WI 53562
        </p>
        <p className="text-accent_primary underline">
          <a href="tel:5555555555" target="_blank">
            (716) 536-1113
          </a>
          <br />
          <a href="mailto:email@email.com" target="_blank">
            zin@plateinitiative.com
          </a>
        </p>
      </div>
    </div>
  </BodySection>
);

export default Description;
