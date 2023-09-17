import Description from "@/components/mission/Description";
import Quote from "@/components/mission/Quote";
import ParallaxImage from "@/components/shared/ParallaxImage";
import React from "react";
import Image from "next/image";

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
