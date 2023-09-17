import Description from "@/components/mission/Description";
import Quote from "@/components/mission/Quote";
import SpaceImage from "@/components/shared/SpaceImage";
import React from "react";

const Page = () => (
  <>
    <SpaceImage src={"/mission-bg.jpeg"} />
    <Description />
    <Quote />
  </>
);

export default Page;
