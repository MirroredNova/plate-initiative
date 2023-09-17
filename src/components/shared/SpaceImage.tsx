"use client";

import Image from "next/image";
import React from "react";
import { Background, Parallax } from "react-parallax";

type Props = {
  src: string;
};

const SpaceImage = ({ src }: Props) => (
  <section>
    <Parallax strength={800} className="h-screen">
      <Background className="w-screen h-screen">
        <Image
          src={src}
          alt="fill murray"
          width={2500}
          height={1875}
          className="h-full w-full object-cover"
        />
      </Background>
    </Parallax>
  </section>
);

export default SpaceImage;
