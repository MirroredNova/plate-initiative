import GetInvolved from "@/components/home/GetInvolved";
import Introduction from "@/components/home/Introduction";
import Mission from "@/components/home/Mission";
import Programs from "@/components/home/Programs";
import Quote from "@/components/home/Quote";
import SpaceImage from "@/components/home/SpaceImage";
import React from "react";

const Home = () => (
  <>
    <Introduction />
    <SpaceImage />
    <Mission />
    <Quote
      text="Empowering culinary dreams, one skill, one opportunity, and one plate at a time."
      by="ZIN KYAW (FOUNDER)"
    />
    <Programs />
    <GetInvolved />
  </>
);

export default Home;
