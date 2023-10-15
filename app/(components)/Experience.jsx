"use client";

import { experience } from "../(dummy_data)/experiece";
import { Svg } from ".";
import { useTheme } from "next-themes";
import { ExpIntro, ExpOhhMyNails, ExpJSM, ExpAllureNails } from ".";
import { useState } from "react";

const Experience = () => {
  const { theme } = useTheme();
  const [expState, setExpState] = useState("exp");

  return (
    <main className="bg-whitev dark:bg-black-200 dark:text-white flex items-center justify-center py-[80px]">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row gap-8 items-center justify-center px-6">
        {expState === "exp" && <ExpIntro />}
        {expState === "exp1" && <ExpOhhMyNails />}
        {expState === "exp2" && <ExpJSM />}
        {expState === "exp3" && <ExpAllureNails />}

        <section className="w-full md:w-1/2">
          <ul className="flex flex-col gap-8">
            {experience.map((item) => (
              <li
                className={`flex items-center gap-6 border border-white-800 dark:border-black-200 dark:hover:bg-black-300 rounded-[10px] px-6 py-4 transition-all duration-500 hover:translate-x-8 hover:shadow-lg li_container ${expState === item.img && 'translate-x-8 shadow-lg dark:bg-black-300'}`}
                key={item.img}
                onClick={() => setExpState(item.img)}
              >
                <Svg
                  iconName={item.img}
                  color={theme === "light" ? "black" : "white"}
                  className="exp_icon"
                />
                <aside>
                  <h1 className="font-semibold text-[24px] leading-[31px]">
                    {item.title}
                  </h1>
                  <p className="text-white-500">{item.description}</p>
                </aside>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Experience;
