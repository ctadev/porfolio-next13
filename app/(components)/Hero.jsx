"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center mt-[80px]">
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-center justify-center md:pl-6 py-[20px] lg:py-[40px] gap-4">
        <div className="w-full md:w-1/2 relative flex items-center justify-center h-[450px]">
          <section className="absolute z-20 flex flex-col gap-4 py-8 px-6 md:px-0">
            <h3 className="font-semibold text-[20px] leading-[26px] text-blue-light tracking-[0.3rem]">
              HI, I AM CONG
            </h3>
            <div className="font-bold whitespace-nowrap text-[32px] leading-[36px] md:text-[42px] md:leading-[48px] lg:text-[50px] lg:leading-[60px] xl:text-[64px] xl:leading-[83px] text-black-200 dark:text-white-900">
              <h1>Professional</h1>
              <div className="relative w-fit">
                <h2 className="">Web Developer</h2>
                <div className="w-full md:h-[20px] absolute bg-blue-secondary left-0 -bottom-1 h-[15px] lg:bottom-1 -z-10" />
              </div>
              <h1>based in Canada</h1>
            </div>

            <p className="text-white-500 dark:text-white-800 font-normal">
              Transforming the web one line of code at a time: Crafting
              cutting-edge digital experiences with precision, passion, and a
              profound commitment to excellence
            </p>
            <div className="flex flex-col lg:flex-row gap-4">
              <button className="h-[47px] lg:h-[70px] bg-blue-light dark:bg-blue-dark w-full md:w-[186px] rounded-full text-white">
                My Work
              </button>
              <button className="h-[47px] lg:h-[70px] w-full md:w-[305px] rounded-full bg-white dark:bg-black-200 text-white-500 dark:text-white">
                ctakammy@gmail.com
              </button>
            </div>
          </section>
        </div>

        <section className="relative h-[350px] md:h-[400px] lg:h-[500px] w-full md:w-1/2">
          <Image
            src={theme === "light" ? "/dudecoding.svg" : "/dudecodingdark.svg"}
            alt="dude coding"
            fill
            className=""
          />
        </section>
      </div>
    </main>
  );
};

export default Hero;
