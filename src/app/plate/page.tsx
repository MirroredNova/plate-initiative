import Description from "@/components/plate/Description";
import ParallaxImage from "@/components/shared/ParallaxImage";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "P.L.A.T.E.",
  description: `The Plate Initiative is a non-profit organization that aims to equip underserved youths with the tools to become innovators
  in the field of culinary arts by empowering them to explore opportunities and acquire essential life skills.`,
};

const Page = () => (
  <>
    <ParallaxImage>
      <Image
        src={"/plate-bg.jpeg"}
        alt="fill murray"
        width={2500}
        height={1875}
        className="h-full w-full object-cover"
      />
    </ParallaxImage>
    <Description />
  </>
);

export default Page;
