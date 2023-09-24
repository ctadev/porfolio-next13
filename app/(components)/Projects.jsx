"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Svg } from ".";
import { projects } from "../(dummy_data)/project";
import { urlFor } from "../(hooks)/sanity";
import Link from "next/link";

const Projects = ({ project }) => {
  useEffect(() => {
    console.log(project);
  }, []);
  return (
    <main className="bg-white dark:bg-black-200 flex items-center justify-center pb-[40px] md:pb-[70px]">
      <div className="max-w-[1440px] w-full relative pt-[100px] pb-[20px] md:pt-[140px] md:pb-[50px] flex items-center justify-center px-6">
        <section className="absolute z-20 left-1/2 top-8 md:top-12 md:whitespace-nowrap -translate-x-1/2">
          <h1 className="font-bold text-[36px] leading-[41px] md:text-[48px] md:leading-[55px] text-black-200 dark:text-white">
            Featured
            <span className="relative mx-3 whitespace-nowrap">
              Projects
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-1 md:bottom-2 -z-10" />
            </span>
          </h1>
        </section>

        <section className="flex flex-col gap-8 w-full">
          {project?.map((item, index) => (
            <section
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 && "md:flex-row-reverse"
              } md:gap-6 w-full text-white pt-6 lg:py-12 rounded-[20px] px-4 ${
                item?.bg_color
              }`}
              key={item?.slug}
            >
              <div
                className={`flex flex-col gap-4 items-start justify-center pl-[25px] pt-[20px] md:pt-0 sm:pl-[40px] lg:pl-[100px] ${
                  index % 2 === 1 && "2xl:pl-[40px]"
                }`}
              >
                <Link href={`/case/${item?.slug}`}>
                  <h1 className="font-bold text-[32px] leading-[37px] lg:text-[48px] lg:leading-[55px]">
                    {`${item?.name} - ${item?.short_description}`}
                  </h1>
                </Link>
                <ul className="flex gap-4">
                  {item?.showcase_stack?.map((item, index) => (
                    <li
                      className="rounded-[6px] p-[10px] bg-white/20"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={`/case/${item?.slug}`}>
                  <div
                    className={`flex items-center justify-start gap-2 mt-5 cursor-pointer ${
                      index % 2 === 1 && "flex-row-reverse"
                    }`}
                  >
                    <p className="text-white-900 text-[18px] font-semibold">
                      See Detail Project
                    </p>
                    <Svg
                      iconName="arrow"
                      color="white"
                      className={`${index % 2 === 1 && "rotate-180"}`}
                    />
                  </div>
                </Link>
              </div>

              <Link
                href={`/case/${item?.slug}`}
                className="w-full flex-grow mb-8 mt-2 sm:mt-6 sm:mb-6 md:mt-0 md:mb-0 md:h-[330px] h-[170px] sm:h-[200px]"
              >
                <aside className="relative h-full w-full">
                  <Image
                    src={urlFor(item.preview_image).url()}
                    alt="project"
                    fill
                  />
                </aside>
              </Link>
            </section>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Projects;
