"use client";

import React from "react";
import { Background, Parallax } from "react-parallax";

type Props = {
  children: React.ReactNode;
};

const ParallaxImage = ({ children }: Props) => (
  <section>
    <Parallax strength={400} className="h-screen">
      <Background className="w-screen h-screen">{children}</Background>
    </Parallax>
  </section>
);

export default ParallaxImage;
