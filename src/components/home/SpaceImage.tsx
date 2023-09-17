"use client";

import React from "react";
import { Parallax } from "react-parallax";

const SpaceImage = () => (
  <Parallax
    bgImage="/home-bg.jpeg"
    bgImageAlt="kitchen background image"
    bgImageStyle={{ objectFit: "cover" }}
    strength={400}
    blur={{ min: -3, max: 4 }}
  >
    <div className="h-screen"></div>
  </Parallax>
);

export default SpaceImage;
