import Description from "@/components/plate/Description";
import ParallaxImage from "@/components/shared/ParallaxImage";
import React from "react";
import Image from "next/image";

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
