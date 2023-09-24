import React from "react";
import { Svg } from "../(components)";
import Link from "next/link";

const Form = () => {
  return (
    <main className="flex items-center justify-center overflow-x-hidden">
      <div className="max-w-[1440px] w-full flex flex-col-reverse gap-[80px] md:flex-row md:gap-[100px] px-6 py-[100px]">
        <section>
          <ul className="flex flex-col gap-10">
            <li>
              <h1 className="text-[24px] leading-[31px]">My Socials</h1>
              <div className="flex gap-6 mt-4">
                <Link
                  href="https://www.linkedin.com/in/cong-ta-8040a018b/"
                  target="_blank"
                >
                  <Svg
                    iconName="linkin"
                    color="#778295"
                    className="social_icons"
                  />
                </Link>
                <Link href="https://github.com/ctadev" target="_blank">
                  <Svg
                    iconName="github"
                    color="#778295"
                    className="social_icons h-[24px] w-[24px]"
                  />
                </Link>
              </div>
            </li>

            <li>
              <h1 className="text-[24px] leading-[31px]">Phone Number</h1>
              <Link href="tel:2267535591">
                <div className="flex items-center gap-2 mt-4 div_icon group">
                  <Svg
                    iconName="phone"
                    color="#778295"
                    className="social_icons"
                  />
                  <p className="font-semibold text-[24px] leading-[31px] dark:text-white text-black-400 group-hover:text-blue-secondary">
                    (226) 753-5591
                  </p>
                </div>
              </Link>
            </li>

            <li>
              <h1 className="text-[24px] leading-[31px]">Email Address</h1>
              <Link href="mailto:ctakammy@gmail.com">
                <div className="flex items-center gap-2 mt-4 div_icon group">
                  <Svg
                    iconName="chevdown"
                    color="#778295"
                    className="social_icons"
                  />
                  <p className="font-semibold text-[24px] leading-[31px] dark:text-white text-black-400 group-hover:text-blue-secondary">
                    ctakammy@gmail.com
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </section>

        <section className="flex-grow">
          <ul className="flex flex-col gap-10">
            <li>
              <h2 className="text-[20px] leading-[30px] mb-4">
                What&apos;s your name?
              </h2>
              <input
                type="text"
                className="h-[50px] md:h-[80px] rounded-[20px] w-full bg-white-800 border border-[#CCE1FF] dark:border-[#2C3C56] dark:bg-black-300 outline-none px-4"
              />
            </li>
            <li>
              <h2 className="text-[20px] leading-[30px] mb-4">
                What&apos;s your email?
              </h2>
              <input
                type="text"
                className="h-[50px] md:h-[80px] rounded-[20px] w-full bg-white-800 border border-[#CCE1FF] dark:border-[#2C3C56] dark:bg-black-300 outline-none px-4"
              />
            </li>
            <li>
              <h2 className="text-[20px] leading-[30px] mb-4">Your message?</h2>
              <textarea
                rows="4"
                cols="50"
                className="h-[140px] md:h-[190px] rounded-[20px] w-full bg-white-800 border border-[#CCE1FF] dark:border-[#2C3C56] dark:bg-black-300 outline-none p-4"
              ></textarea>
            </li>
            <li className="flex justify-end">
              <button className="h-[70px] rounded-full w-full md:w-[186px] bg-blue-light text-white">
                Send
              </button>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Form;
