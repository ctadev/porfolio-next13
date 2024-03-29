import React from "react";

const ExpJSM = () => {
  return (
    <section className="bg-white-800 relative dark:bg-black-300 dark:text-white-900 text-black-200 h-[550px] lg:h-[593px] w-full lg:w-1/2 rounded-[16px]">
      <div className="absolute z-20 w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-center text-[32px] leading-[42px] sm:text-[48px] sm:leading-[55px]"></h1>
        <h1 className="font-bold text-[32px] leading-[42px] sm:text-[48px] sm:leading-[55px]">
          <span className="relative after:h-[15px] after:w-full after:absolute after:left-0 after:bottom-0 md:after:bottom-2 after:bg-blue-secondary after:-z-10">
            JSM Mastery
          </span>{" "}
          Bootcamp
        </h1>
        <ul>
          <li className="mt-8 text-white-500 dark:text-white-800">
            As a Software Engineer at{" "}
            <span className="dark:text-blue-dark text-blue-light">
              JSM Mastery Class
            </span>
            , I was part of a small group of talented developers that was tasked in building industry-grade application in a real world, team-based setting while following agile methodologies and scrum principles.
          </li>

          <li className="mt-8 text-white-500 dark:text-white-800">
            My role involves collaborating with a team of engineers and
            designers to enhance our project&apos;s performance, security, and user
            experience.
          </li>
        </ul>
        <aside className="items-center mt-6 hidden sm:flex">
          <div className="w-[70%] sm:w-full h-[1px] dark:bg-white bg-[#151E2C66]" />
          <article className="rounded-full border border-[#151E2C66] p-2 md:p-3 dark:border-white">
            <div className="h-[26px] w-[26px] md:h-[44px] md:w-[44px] rounded-full dark:bg-white bg-black" />
          </article>
        </aside>
      </div>
    </section>
  );
};

export default ExpJSM;
