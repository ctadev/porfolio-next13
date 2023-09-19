import React from "react";
import { Svg } from "../(components)";

const Collaborate = () => {
  return (
    <main className="flex items-center justify-center pb-[10px]">
      <div className="max-w-[1440px] w-full px-6">
        <section className="bg-collabbg bg-center object-contain bg-no-repeat h-[300px] lg:h-[400px] bg-blue-secondary rounded-[20px] relative flex flex-col items-center justify-center gap-6 px-4 md:px-0">
          <h1 className="font-bold text-[30px] leading-[31px] lg:text-[48px] lg:leading-[55px] text-black-200 md:w-[520px] md:absolute md:left-16 md:top-1/2 md:-translate-y-1/2">
            Take a look at my work and see for yourself, on how I can turn
            your ideas into reality.
          </h1>
          <ul className="lg:h-[69px] h-[47px] rounded-full w-full sm:w-[323px] bg-blue-light flex items-center justify-center sm:absolute sm:bottom-[40px] md:right-16 lg:bottom-[100px]">
            <li className="flex items-center gap-2 cursor-pointer">
              <p className="text-white font-semibold text-[18px] leading-[29px] ">
                Go See My Work!
              </p>
              <Svg iconName="smallarrow" />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};
export default Collaborate;