import GetInvolved from "@/components/home/GetInvolved";
import Introduction from "@/components/home/Introduction";
import Mission from "@/components/home/Mission";
import Programs from "@/components/home/Programs";
import Quote from "@/components/home/Quote";
import ParallaxImage from "@/components/shared/ParallaxImage";
import React from "react";
import Image from "next/image";

const Home = () => (
  <>
    <Introduction />
    <ParallaxImage>
      <Image
        src={"/home-bg.jpeg"}
        alt="fill murray"
        width={2500}
        height={1875}
        className="h-full w-full object-cover"
      />
    </ParallaxImage>
    <Quote
      text="Empowering culinary dreams, one skill, one opportunity, and one plate at a time."
      by="ZIN KYAW (FOUNDER)"
    />
    <Mission />
    <Programs />
    <GetInvolved />
  </>
);

export default Home;
