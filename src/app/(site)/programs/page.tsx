import React from "react";
import CoverImage from "@/components/programs/CoverImage";
import ProgramsList from "@/components/programs/ProgramsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: `The Plate Initiative is a non-profit organization that aims to equip underserved youths with the tools to become innovators
  in the field of culinary arts by empowering them to explore opportunities and acquire essential life skills.`,
};

const Page = () => (
  <>
    <CoverImage />
    <ProgramsList />
  </>
);

export default Page;
