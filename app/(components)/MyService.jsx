"use client";

import { useTheme } from "next-themes";
import { Svg } from ".";
import { myservice } from "../(dummy_data)/service";;

const MyService = () => {
  const { theme } = useTheme();

  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center pb-[40px] md:pb-[70px]">
      <div className="max-w-[1440px] relative pt-[100px] pb-[20px] md:pt-[140px] md:pb-[50px] flex items-center justify-center">
        <section className="absolute z-20 left-1/2 top-8 md:top-12 md:whitespace-nowrap -translate-x-1/2">
          <h1 className="font-bold text-[36px] leading-[41px] md:text-[48px] md:leading-[55px] text-black-200 dark:text-white text-center">
            What
            <span className="relative mx-3 whitespace-nowrap">
              service
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-1 md:bottom-2 -z-10" />
            </span>
            do I provide
          </h1>
        </section>

        <section className="mt-4 pt-[50px] md:pt-0 w-full">
          <ul className="flex flex-col sm:flex-row justify-center gap-8 flex-wrap">
            {myservice?.map((item, index) => (
              <li
                key={item.title}
                className={`bg-[#F3F8FF] dark:bg-black-300 h-[245px] w-[237px] rounded-lg flex flex-col justify-center gap-2 px-5 hover:bg-blue-light dark:hover:bg-blue-light transition-all duration-300 lg:hover:translate-y-12 group header_li ${
                  theme === "light" ? "box-shadow-light" : "box-shadow-dark"
                }`}
              >
                <div className="bg-blue-light dark:bg-blue-dark w-[62px] h-[62px] rounded-lg flex items-center justify-center box-shadow-blue group-hover:bg-white header_icons">
                  <Svg
                    iconName={item.img}
                    className="header_icon"
                    color="white"
                  />
                </div>
                <h1 className="text-black-200 dark:text-white font-semibold mt-4 group-hover:text-white">
                  {item.title}
                </h1>
                <p className="text-white-500 text-[14px] leading-[22px] group-hover:text-[#F3F8FF]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default MyService;
