import React from "react";

const Title = () => {
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center pb-[40px] md:pb-[70px]">
      <div className="max-w-[1440px] relative pt-[60px] md:pt-[110px] flex items-center justify-center px-6">
        <section className="absolute z-20 left-1/2 top-8 md:top-12 md:whitespace-nowrap -translate-x-1/2">
          <h1 className="font-bold text-[36px] leading-[41px] md:text-[48px] md:leading-[55px] text-black-200 dark:text-white text-center">
            <span className="relative ml-3 whitespace-nowrap">
              Get in Touch
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 md:bottom-2 bottom-1 -z-10" />
            </span>
          </h1>
        </section>

        <section className="pt-[40px] md:pt-[20px]">
          <p className="text-white-500 dark:text-white text-center">
            Let&apos;s Collaborate on Your Next Project
          </p>
        </section>
      </div>
    </main>
  );
};

export default Title;
