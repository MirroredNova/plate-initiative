import Description from "@/components/mission/Description";
import Quote from "@/components/mission/Quote";
import ParallaxImage from "@/components/shared/ParallaxImage";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission",
  description: `The Plate Initiative is a non-profit organization that aims to equip underserved youths with the tools to become innovators
  in the field of culinary arts by empowering them to explore opportunities and acquire essential life skills.`,
};

const Page = () => (
  <>
    <ParallaxImage>
      <Image
        src={"/mission-bg.jpeg"}
        alt="fill murray"
        width={2500}
        height={1875}
        className="h-full w-full object-cover"
      />
    </ParallaxImage>
    <Description />
    <Quote />
  </>
);

export default Page;
