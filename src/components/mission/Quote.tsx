import React from "react";
import TextImage from "../shared/TextImage";

const Quote = () => (
  <section className="flex justify-center">
    <TextImage right={false} src={"/mission-card.jpeg"}>
      <div className="bg-white px-2 py-8 sm:px-14 sm:py-14 grid gap-4">
        <p className="text-secondary_dark font-alice text-lg">
          &quot;The program doesn&apos;t just teach them recipes; it empowers
          them to believe in themselves and their potential.&quot;
        </p>
        <p className="text-secondary_dark font-alice text-lg">
          — Lucas Kostecki, Plate Initiative Volunteer
        </p>
      </div>
    </TextImage>
  </section>
);

export default Quote;
