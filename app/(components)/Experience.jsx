"use client";

import { experience } from "../(dummy_data)/experiece";
import { Svg } from ".";
import { useTheme } from "next-themes";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <main className="bg-whitev dark:bg-black-200 dark:text-white flex items-center justify-center py-[80px]">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row gap-8 items-center justify-center px-6">
        <section className="bg-black-200 relative dark:bg-white-800 dark:text-black text-white h-[400px] sm:h-[450px] lg:h-[593px] w-full lg:w-1/2 rounded-[16px]">
          <div className="absolute z-20 w-[340px] left-[5%] md:left-[15%] top-[20%] lg:top-[30%]">
            <h1 className="font-bold text-[32px] leading-[42px] sm:text-[48px] sm:leading-[55px]">
              Work
            </h1>
            <h1 className="font-bold text-[32px] leading-[42px] sm:text-[48px] sm:leading-[55px]">
              <span className="relative after:h-[15px] after:w-full after:absolute after:left-0 after:bottom-0 md:after:bottom-2 after:bg-blue-secondary after:-z-10">
                Experi
              </span>
              ence
            </h1>
            <p className="mt-8 dark:text-white-500">
              Progress and milestones: A simple walkthrough of roles, projects,
              and achievements in my career.
            </p>
            <aside className="flex items-center mt-6">
              <div className="w-[70%] sm:w-full h-[1px] bg-white dark:bg-[#151E2C66]" />
              <article className="rounded-full border dark:border-[#151E2C66] p-2 md:p-3 border-white">
                <div className="h-[26px] w-[26px] md:h-[44px] md:w-[44px] rounded-full bg-white dark:bg-black" />
              </article>
            </aside>
          </div>
        </section>

        <section className="w-full md:w-1/2">
          <ul className="flex flex-col gap-8">
            {experience.map((item) => (
              <li
                className="flex items-center gap-6 border border-white-800 dark:border-black-200 dark:hover:bg-black-300 rounded-[10px] px-6 py-4 transition-all duration-500 hover:translate-x-8 hover:shadow-lg li_container"
                key={item.img}
              >
                <Svg
                  iconName={item.img}
                  color={theme === "light" ? "black" : "white"}
                  className="exp_icon"
                />
                <aside>
                  <h1 className="font-semibold text-[24px] leading-[31px]">
                    {item.title}
                  </h1>
                  <p className="text-white-500">{item.description}</p>
                </aside>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Experience;
