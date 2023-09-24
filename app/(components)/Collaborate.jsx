import React from "react";
import Link from "next/link";
import { Svg } from ".";

const Collaborate = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-6 py-[70px]">
        <section className="bg-collabbg bg-center object-contain bg-no-repeat h-[330px] bg-blue-secondary rounded-[20px] relative flex flex-col items-center justify-center gap-6 px-4 md:px-0">
          <h1 className="font-bold text-[30px] leading-[31px] lg:text-[48px] lg:leading-[55px] text-black-200 md:w-[520px] md:absolute md:left-16 md:top-1/2 md:-translate-y-1/2">
            Have a project in mind that requires technical expertise?
          </h1>
          <Link href="/contact">
            <ul className="lg:h-[69px] h-[47px] rounded-full w-full sm:w-[323px] bg-blue-light flex items-center justify-center sm:absolute sm:bottom-[40px] md:right-16 lg:bottom-[100px] px-6 md:px-0">
              <li className="flex items-center gap-2 cursor-pointer">
                <p className="text-white font-semibold text-[18px] leading-[29px] ">
                  Get in Touch with Me
                </p>
                <Svg iconName="smallarrow" />
              </li>
            </ul>
          </Link>
        </section>
      </div>
    </main>
  );
};
export default Collaborate;
