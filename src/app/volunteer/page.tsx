import ParallaxImage from "@/components/shared/ParallaxImage";
import Description from "@/components/volunteer/Description";
import NewVolunteerForm from "@/components/volunteer/NewVolunteerForm";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Volunteer",
  description: `Become a volunteer with The Plate Initiative. As a volunteer, you become an essential part of our mission, 
  contributing your skills and passion to empower underserved youths in the culinary world.`,
};

const Page = () => (
  <>
    <ParallaxImage>
      <Image
        src={"/volunteer-bg.jpeg"}
        alt="fill murray"
        width={2500}
        height={1875}
        className="h-full w-full object-cover"
      />
    </ParallaxImage>
    <Description />
    <NewVolunteerForm />
  </>
);

export default Page;
