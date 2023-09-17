import React from "react";
import Image from "next/image";

type Props = {
  right: boolean;
  src: string;
  children: React.ReactNode;
};

const TextImage = ({ right, src, children }: Props) => (
  <div className="h-fit my-auto px-3 sm:px-12 py-20 max-w-6xl md:relative">
    <div>
      <Image
        src={src}
        alt="Our Mission Image"
        width={1220}
        height={1831}
        className={`md:w-3/5 ${right ? "mr-auto" : "ml-auto"}`}
      />
    </div>
    <div
      className={`top-0 
      ${right ? "right-12" : "left-12"}
      right-12 md:absolute h-full flex flex-col justify-center md:w-1/2`}
    >
      {children}
    </div>
  </div>
);

export default TextImage;
