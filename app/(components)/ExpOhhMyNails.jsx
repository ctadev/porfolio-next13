import React from "react";
import Link from "next/link";

const ExpOhhMyNails = () => {
  return (
    <section className="bg-white-800 relative dark:bg-black-300 dark:text-white-900 text-black-200 h-[550px] lg:h-[593px] w-full lg:w-1/2 rounded-[16px]">
      <div className="absolute z-20 w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-center text-[32px] leading-[42px] sm:text-[48px] sm:leading-[55px]"></h1>
        <h1 className="font-bold text-[32px] leading-[42px] sm:text-[48px] sm:leading-[55px]">
          <span className="relative after:h-[15px] after:w-full after:absolute after:left-0 after:bottom-0 md:after:bottom-2 after:bg-blue-secondary after:-z-10">
            Ohh My Nails
          </span>{" "}
          Developer
        </h1>
        <ul>
          <li className="mt-8 text-white-500 dark:text-white-800">
            As a web developer for{" "}
            <Link href="https://www.ohhmynails.ca/" target="_blank">
              <span className="dark:text-blue-dark text-blue-light">
                Ohh My Nails Corporation
              </span>
            </Link>
            , I&apos;ve had the privilege to build and deploy the company
            website to promote their business online. My role involves designing, frontend and backend development, SEO Optimization.
          </li>

          <li className="mt-8 text-white-500 dark:text-white-800">
            The website will provide all the information that a customer needs
            to know about the salon, customer can also directly chat with the
            merchant if they have any question and customer can also book online
            through a third party booking service provider.
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

export default ExpOhhMyNails;
