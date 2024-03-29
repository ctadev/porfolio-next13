import React from "react";

const Title = () => {
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center pb-[40px] md:pb-[70px] mt-[80px]">
      <div className="max-w-[1440px] relative pt-[100px] md:pt-[110px] flex items-center justify-center px-6">
        <section className="absolute z-20 left-1/2 top-8 md:top-12 -translate-x-1/2 break-all w-[90%]">
          <h1 className="font-bold text-[36px] leading-[41px] sm:text-[48px] sm:leading-[55px] text-black-200 dark:text-white text-center break-words">
            Recent
            <span className="relative ml-3 whitespace-nowrap">
              Case Studies
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-1 md:bottom-2 -z-10" />
            </span>
            {/* <span className="relative ml-3 whitespace-nowrap md:hidden">
              Case
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-1 -z-10" />
            </span>
            <span className="relative mx-3 whitespace-nowrap md:hidden">
              Studies
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-1 -z-10" />
            </span> */}
          </h1>
        </section>

        <section className="pt-[40px] md:pt-[20px]">
          <p className="text-white-500 dark:text-white text-center">
            Dive into my recent success stories and discover how I&apos;ve
            helped clients overcome challenges, innovate, and achieve their
            goals
          </p>
        </section>
      </div>
    </main>
  );
};

export default Title;
