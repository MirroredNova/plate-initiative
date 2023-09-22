import React from "react";
import Image from "next/image";
import BodySection from "../shared/BodySection";

const CoverImage = () => (
  <BodySection>
    <div className="max-w-6xl px-3 sm:px-12 pt-20">
      <Image
        src={"/program-bg.jpg"}
        alt="fill murray"
        width={2500}
        height={1875}
      />
    </div>
  </BodySection>
);

export default CoverImage;
