import React from "react";

const Title = () => {
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center pb-[40px] md:pb-[70px]">
      <div className="max-w-[1440px] relative pt-[100px] pb-[20px] md:pt-[140px] md:pb-[50px] flex items-center justify-center">
        <section className="absolute z-20 left-1/2 top-8 md:top-12 md:whitespace-nowrap -translate-x-1/2">
          <h1 className="font-bold text-[36px] leading-[41px] md:text-[48px] md:leading-[55px] text-black-200 dark:text-white text-center">
            What
            <span className="relative mx-3 whitespace-nowrap">
              service
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-2 -z-10" />
            </span>
            do I provide
          </h1>
        </section>
      </div>
    </main>
  );
};

export default Title;
