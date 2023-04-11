"use client";

import { useState } from "react";
import Plx from "react-plx";

const Hero = () => {
  return (
    <main className="bg-black relative">
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
          zIndex: 100,
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
          height: "100VH",
        }}
      >
        <img style={{ width: "100%" }} src="background.jpg" alt="background" />
      </Plx>
      {/* <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "sticky",
          left: "50%",
          right: "50%",
          margin: "auto",
          top: "26vw",
          width: "100%",
        }}
      >
        <img
          style={{
            width: "30vw",
          }}
          src="/text-img.webp"
          alt="Goonies"
        />
      </Plx> */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
    </main>
  );
};

export default Hero;
