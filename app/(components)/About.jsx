import { AiFillHtml5 } from "react-icons/ai";
import { MdCss } from "react-icons/md";
import { SiReact } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiRedux } from "react-icons/si";

import Image from "next/image";

const About = () => {
  return (
    <main className="flex items-center justify-center mb-40 mt-30" id="about">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center md:flex-row md:items-start gap-8 md:gap-4 mt-[200px] px-4 bg-[#202A3C] relative py-10">
        {/* Skew div */}
        <div className="absolute -top-20 -z-10 left-0 h-[100px] w-full bg-[#202A3C] transform -skew-y-2" />
        <div className="absolute -bottom-20 -z-10 left-0 h-[100px] w-full bg-[#202A3C] transform -skew-y-1" />
        {/* Left Section */}
        <section className="md:w-1/2 ml-4">
          <div className="flex gap-4 items-center">
            <h1 className="font-nothing text-5xl whitespace-nowrap">
              About Me
            </h1>
            <div className="w-full h-[2px] bg-white" />
          </div>

          <p className="font-quicksand text-xl mt-4">
            I have a computer programming diploma in College, ever since then I
            have been fasinated in frontend web development and started my own
            journey as I self taught myself to futher enhance my skills.
          </p>

          <p className="font-quicksand text-xl mt-8">
            With a plethora of training, a great number of applications built,
            and an ineffable amount of hours dedicated, I&apos;ve become confident in
            calling myself a fullstack web developer. I&apos;m excited to see
            what the future holds.
          </p>
        </section>

        {/* Right Section */}
        <section className="flex flex-col items-center justify-center md:w-1/2">
          <Image
            src="https://www.congta.ca/static/media/certificate.9f8c26853349112b981acb8f8d46dd74.svg"
            alt=""
            height={250}
            width={200}
          />
          <h2 className="font-nothing text-5xl mt-8">Skills</h2>
          <ul className="flex items-center justify-center flex-wrap gap-4 mt-4">
            <li className={s.items}>
              <AiFillHtml5 className={s.icons} />
              <p className={s.name}>HTML5</p>
            </li>
            <li className={s.items}>
              <MdCss className={s.icons} />
              <p className={s.name}>CSS3</p>
            </li>
            <li className={s.items}>
              <SiReact className={s.icons} />
              <p className={s.name}>ReactJS/NextJS</p>
            </li>
            <li className={s.items}>
              <DiJavascript1 className={s.icons} />
              <p className={s.name}>Javascript</p>
            </li>
            <li className={s.items}>
              <DiSass className={s.icons} />
              <p className={s.name}>Sass</p>
            </li>
            <li className={s.items}>
              <DiMongodb className={s.icons} />
              <p className={s.name}>MongoDB</p>
            </li>
            <li className={s.items}>
              <DiDatabase className={s.icons} />
              <p className={s.name}>CMS Sanity IO</p>
            </li>
            <li className={s.items}>
              <FaNodeJs className={s.icons} />
              <p className={s.name}>Nodejs</p>
            </li>
            <li className={s.items}>
              <SiExpress className={s.icons} />
              <p className={s.name}>ExpressJs</p>
            </li>
            <li className={s.items}>
              <SiTailwindcss className={s.icons} />
              <p className={s.name}>TailwindCSS</p>
            </li>
            <li className={s.items}>
              <FaFigma className={s.icons} />
              <p className={s.name}>Figma</p>
            </li>
            <li className={s.items}>
              <SiTypescript className={s.icons} />
              <p className={s.name}>Typescript</p>
            </li>
            <li className={s.items}>
              <AiFillGithub className={s.icons} />
              <p className={s.name}>Github</p>
            </li>
            <li className={s.items}>
              <SiRedux className={s.icons} />
              <p className={s.name}>Redux</p>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default About;

const s = {
  items:
    "flex gap-2 items-center justify-between px-2 py-1 border border-white rounded-md",
  icons: "text-3xl",
  name: "",
};
