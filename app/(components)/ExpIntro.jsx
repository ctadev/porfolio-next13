import React from "react";

const ExpIntro = () => {
  return (
    <section className="bg-white-800 relative dark:bg-black-300 dark:text-white-900 text-black-200 h-[400px] sm:h-[450px] lg:h-[593px] w-full lg:w-1/2 rounded-[16px]">
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
        <p className="mt-8 text-white-500 dark:text-white-800">
          Progress and milestones: A simple walkthrough of roles, projects, and
          achievements in my career.
        </p>
        <aside className="flex items-center mt-6">
          <div className="w-[70%] sm:w-full h-[1px] dark:bg-white bg-[#151E2C66]" />
          <article className="rounded-full border border-[#151E2C66] p-2 md:p-3 dark:border-white">
            <div className="h-[26px] w-[26px] md:h-[44px] md:w-[44px] rounded-full dark:bg-white bg-black" />
          </article>
        </aside>
      </div>
    </section>
  );
};

export default ExpIntro;
