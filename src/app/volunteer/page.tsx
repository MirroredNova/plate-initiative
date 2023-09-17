import ParallaxImage from "@/components/shared/ParallaxImage";
import Description from "@/components/volunteer/Description";
import NewVolunteerForm from "@/components/volunteer/NewVolunteerForm";
import Image from "next/image";
import React from "react";

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
