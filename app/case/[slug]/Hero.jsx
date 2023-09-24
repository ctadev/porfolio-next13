"use client";

import Image from "next/image";
import { Svg } from "../../(components)";
import { useTheme } from "next-themes";
import { urlFor } from "@/app/(hooks)/sanity";
import Link from "next/link";

const Hero = ({ image, github, demo }) => {
  const { theme } = useTheme();
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center">
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-center justify-center md:pl-6 py-[20px] lg:py-[40px] gap-4">
        <section>
          <div className="relative h-[175px] w-full md:h-[350px] md:w-[742px]">
            <Image src={urlFor(image).url()} fill alt="project" />
          </div>

          <ul className="flex items-center justify-center gap-[40px] md:gap-[100px] mt-[60px] pb-[15px]">
            <Link href={demo} target="_blank">
              <li className="flex gap-1 items-center justify-center">
                <Svg
                  iconName="web"
                  color={theme === "light" ? "#0252CD" : "#428DFF"}
                  className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                />
                <aside className="flex items-center gap-2">
                  <p className="font-semibold text-[14px] leading-[20px] md:text-[20px] md:leading-[26px] text-blue-light dark:text-blue-dark">
                    Demo Site
                  </p>
                  <Svg
                    iconName="longarrow"
                    color={theme === "light" ? "#0252CD" : "#428DFF"}
                  />
                </aside>
              </li>
            </Link>
            <Link href={github} target="_blank">
              <li className="flex gap-1 items-center justify-center">
                <Svg
                  iconName="github"
                  color={theme === "light" ? "#0252CD" : "#428DFF"}
                  className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                />
                <aside className="flex items-center gap-2">
                  <p className="font-semibold text-[14px] leading-[20px] md:text-[20px] md:leading-[26px] text-blue-light dark:text-blue-dark">
                    Source Code
                  </p>
                  <Svg
                    iconName="longarrow"
                    color={theme === "light" ? "#0252CD" : "#428DFF"}
                  />
                </aside>
              </li>
            </Link>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Hero;
