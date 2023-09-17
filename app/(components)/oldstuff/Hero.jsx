"use client";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-[50px] sm:mt-0 h-screen" id="hero">
      <div className="w-full max-w-[1200px] px-4 flex flex-col items-center justify-center gap-8 md:flex-row">
        {/* Left Side */}
        <section>
          <div className="text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 via-green-500 to-green-500">
            <Typewriter
              options={{
                strings: ["Hello World!"],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1000);
              }}
            />
          </div>
          <div>
            <p className="text-5xl mt-4 font-arizonia">I am Cong Ta</p>
          </div>
          <h2 className="mt-4 text-xl font-quicksand text-gray-400">
            A Fullstack web developer, Specialized in building beautiful and
            responsive web application. I am a dedicated developer with 1+ years
            of experience with good attention to details and have the ability to
            write efficient code using MERN Stack.
          </h2>
          <ul className="flex gap-4 mt-8 items-center justify-center md:justify-start">
            <Link href="https://github.com/ctadev" target="_blank">
              <li className="p-2 rounded-full border-2 border-[cyan] cursor-pointer">
                <AiFillGithub className="text-[cyan] text-3xl" />
              </li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/cong-ta-8040a018b/"
              target="_blank"
            >
              <li className="p-2 rounded-full border-2 border-[cyan] cursor-pointer">
                <AiFillLinkedin className="text-[cyan] text-3xl" />
              </li>
            </Link>
            <Link href="mailto:ctakammy@gmail.com" target="_blank">
              <li className="p-2 rounded-full border-2 border-[cyan] cursor-pointer">
                <AiFillMail className="text-[cyan] text-3xl" />
              </li>
            </Link>
          </ul>
        </section>

        {/* Right Side */}
        <section className="relative h-[300px] w-[300px] shrink-0 rounded-lg sepia hover:sepia-0 hover:scale-110 transition-all">
          <div className="absolute rounded-lg inset-0 bg-[#202A3C] before:rounded-lg before:content-[''] before:absolute before:top-[50%] before:left-[50%] before:h-[100px] before:w-[500px] before:bg-gradient-to-r from-[cyan] to-purple-500 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-animatepic overflow-hidden after:content-[''] after:absolute after:bg-[#202A3C] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-[98%] after:w-[98%] after:rounded-lg" />
          <Image
            src="/congs.png"
            alt=""
            fill
            className="rounded-full bg-gradient-to-r from-[cyan] to-purple-500 p-4 scale-90"
          />
        </section>
      </div>
      <div className="border border-white rounded-full p-2 animate-bounce mt-6 md:mt-[100px]">
        <AiOutlineArrowDown className="text-white h-[30px] w-[30px]" />
      </div>
    </main>
  );
};

export default Hero;
