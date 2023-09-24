"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { urlFor } from "@/app/(hooks)/sanity";
import Link from "next/link";

const OtherProject = ({ other, slug }) => {
  const filtered = other.filter((item) => item.slug !== slug);
  const { theme } = useTheme();

  function truncate(str, length) {
    if (str.length <= length) return str;
    return str.substring(0, length - 3) + "...";
  }

  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center">
      <div className="max-w-[878px] px-6 w-full md:pl-6 py-[40px] lg:py-[60px] gap-4">
        <section className="w-full">
          <h3 className="text-blue-light dark:text-blue-dark font-semibold">
            Projects
          </h3>
          <h1 className="font-semibold text-[28px] leading-[29px] md:text-[32px] md:leading-[34px] text-black-200 dark:text-white">
            Other Case Studies
          </h1>
        </section>

        <ul className="mt-[20px] md:mt-[40px] flex flex-col md:flex-row gap-6">
          {filtered.slice(0, 2)?.map((item) => (
            <Link href={`/case/${item.slug}`} key={item.slug}>
              <li
                className={`h-[405px] w-full md:h-[540px] md:w-[430px] rounded-[20px] bg-white dark:bg-black-300 ${
                  theme === "light" ? "box-shadow-light" : "box-shadow-dark"
                }`}
              >
                <div className="h-1/2 w-full relative">
                  <Image
                    src={urlFor(item.figma_image).url()}
                    alt="project"
                    fill
                    className="rounded-t-[20px] object-cover"
                  />
                </div>

                <aside className="flex items-center justify-center h-1/2">
                  <div className="px-6 flex flex-col gap-3 pt-2 pb-4">
                    <h1 className="text-blue-light dark:text-blue-dark font-semibold md:text-[24px] md:leading-[31px]">
                      {item.name}
                    </h1>
                    <p className="text-white-500 dark:text-white text-[14px] leading-[21px] md:text-[18px] md:leading-[29px]">
                      {truncate(item.long_description, 130)}
                    </p>
                    <button className="bg-blue-light dark:bg-blue-dark text-white h-[48px] w-full rounded-full font-semibold">
                      See Case Study
                    </button>
                  </div>
                </aside>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default OtherProject;
