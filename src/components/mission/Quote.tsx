import React from "react";
import TextImage from "../shared/TextImage";
import BodySection from "../shared/BodySection";

const Quote = () => (
  <BodySection>
    <TextImage right={false} src={"/mission-card.jpeg"}>
      <div className="bg-white px-2 py-8 sm:px-14 sm:py-14 grid gap-4">
        <p className="text-secondary_dark font-alice text-lg">
          <i>
            &quot;The program doesn&apos;t just teach them recipes; it empowers
            them to believe in themselves and their potential.&quot;
          </i>
        </p>
        <p className="text-secondary_dark font-alice text-lg font-bold">
          — Lucas Kostecki, Plate Initiative Volunteer
        </p>
      </div>
    </TextImage>
  </BodySection>
);

export default Quote;
