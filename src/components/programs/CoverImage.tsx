import React from "react";
import Image from "next/image";

const CoverImage = () => (
  <section className="flex justify-center">
    <div className="max-w-6xl px-3 sm:px-12 pt-20">
      <Image
        src={"/program-bg.jpg"}
        alt="fill murray"
        width={2500}
        height={1875}
      />
    </div>
  </section>
);

export default CoverImage;
