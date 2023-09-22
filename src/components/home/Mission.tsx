import Link from "next/link";
import React from "react";
import TextImage from "../shared/TextImage";
import BodySection from "../shared/BodySection";

// ml-auto, left-12
const Mission = () => (
  <BodySection>
    <TextImage
      right={true}
      src={
        "https://images.squarespace-cdn.com/content/v1/64ebf267e4b7170f23e20052/3a350e0b-0dcc-4691-8c91-a6c3e9875f94/image-asset.jpg"
      }
    >
      <div className="bg-white px-2 py-8 sm:px-14 sm:py-14 grid gap-4">
        <h2 className="text-accent_primary font-sofia text-4xl font-bold whitespace-nowrap">
          Our Mission
        </h2>
        <p className="text-secondary_dark font-alice text-lg">
          The Plate Initiative is a culinary education program designed for
          disadvantaged youths to acquire career opportunities and essential
          life skills. Our mission is to offer affordable and accessible
          education within a critical industry, representing the culinary
          potential of both current and future generations, one plate at a time.
        </p>
        <Link
          href="/mission"
          className="text-secondary_mid font-alice text-lg underline decoration-secondary_mid underline-offset-4 font-bold"
        >
          Learn More
        </Link>
      </div>
    </TextImage>
  </BodySection>
);

export default Mission;
