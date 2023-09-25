import React from "react";
import Image from "next/image";
import { urlFor } from "../(hooks)/sanity";
import Link from "next/link";

const CaseStudies = ({ project }) => {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-6 py-12">
        <ul className="flex items-center gap-8 justify-center flex-wrap">
          {project?.map((item) => (
            <Link
              href={`/case/${item.slug}`}
              key={item?.slug}
              className="w-full md:w-fit transition-all duration-300 hover:scale-105"
            >
              <li className="w-full">
                <section
                  className={`h-[270px] sm:h-[327px] w-full md:w-[550px] rounded-[16px] flex items-end justify-center ${item.bg_color}`}
                >
                  <div className="relative h-[200px] sm:h-[263px] w-full sm:w-[443px]">
                    <Image
                      src={urlFor(item?.laptop_image).url()}
                      fill
                      alt="case study"
                    />
                  </div>
                </section>
                <aside className="pl-8 md:pl-14 mt-6">
                  <h1 className="text-black-200 dark:text-white font-semibold text-[32px] leading-[34px]">
                    {item?.name}
                  </h1>
                  <h3 className="text-white-500 dark:text-white text-[20px] leading-[30px] mt-2">
                    {item?.short_description}
                  </h3>
                </aside>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CaseStudies;
