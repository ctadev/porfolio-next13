"use client";

import { useState } from "react";
import Plx from "react-plx";

const Hero = () => {
  return (
    <main className=" relative">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 2,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "sticky",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: -1,
        }}
      >
        <img style={{ width: "100%" }} src="grass.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "sticky",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 3,
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>
    </main>
  );
};

export default Hero;
