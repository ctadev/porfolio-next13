import React from "react";

const Title = ({ projectName, desc }) => {
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center pb-[140px] md:pb-[40px] mt-[80px]">
      <div className="max-w-[1440px] relative pt-[60px] md:pt-[110px] flex items-center justify-center px-6 w-full">
        <section className="absolute font-semibold left-1/2 -translate-x-1/2 top-[40px] whitespace-nowrap">
          <p className="dark:text-blue-dark text-blue-light text-[14px] leading-[18px] md:text-[20px] md:leading-[26px] tracking-[0.4rem]">
            WEB DEV PROJECT
          </p>
        </section>
        <section className="absolute z-20 left-1/2 top-[90px] md:whitespace-nowrap -translate-x-1/2 w-full">
          <h1 className="font-bold text-[36px] leading-[41px] md:text-[48px] md:leading-[55px] text-black-200 dark:text-white text-center">
            <span className="relative mr-3 whitespace-nowrap">
              {projectName}
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 md:bottom-2 bottom-1 -z-10"/>
            </span>
            {`- ${desc}`}
          </h1>
        </section>
      </div>
    </main>
  );
};

export default Title;
