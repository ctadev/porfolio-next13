"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { AiFillChrome } from "react-icons/ai";
import Link from "next/link";
import { urlFor } from "../(hooks)/sanity";

const Cards = ({
  name,
  index,
  description,
  stack,
  img,
  slug,
  github,
  demo,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ul
      className="mb-[100px]"
      data-aos={index % 2 == 1 ? "fade-right" : "fade-left"}
    >
      <li
        className={`flex gap-4 relative ${
          index % 2 == 1 && "flex-row-reverse"
        }`}
      >
        <div className="sm:w-[80%] lg:w-[70%] w-full h-[500px] rounded-lg relative">
          <Image src={urlFor(img).url()} alt="" fill className="rounded-lg" />
          <div className="absolute z-10 h-full w-full bg-black/70 top-0 left-0 lg:bg-transparent" />
        </div>

        <main
          className={`absolute z-20 w-full sm:w-1/2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:static lg:-translate-y-0 lg:-translate-x-0 ${
            index % 2 == 1 ? "sm:translate-x-[-100%]" : "sm:translate-x-[0%]"
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-2 h-full">
            <div className="relative w-fit mb-4">
              <h1 className="text-4xl font-bold font-kaushan">{name}</h1>
              <div className="w-full h-[20px] bg-gradient-to-r from-purple-700 to-cyan-800 absolute left-0 -bottom-2 -z-10" />
            </div>
            <p className="p-4 border border-[cyan] w-[90%] sm:w-full rounded-md bg-slate-700/80 text-center">
              {description}
            </p>
            <aside className="flex gap-2 flex-wrap">
              {stack?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-wrap transition-all hover:scale-110"
                >
                  <div className="h-[50px] w-[50px] relative lg:h-[70px] lg:w-[70px]">
                    <Image src={urlFor(item.image).url()} alt="" fill={true} />
                  </div>
                  <p>{item.name}</p>
                </div>
              ))}
            </aside>
            <section className="flex gap-6 items-center justify-center mt-2">
              <Link href={github} target="_blank">
                <p>
                  <AiFillGithub className="text-5xl border-2 border-[cyan] rounded-full transition-all hover:border-white hover:text-purple-500 hover:scale-110" />
                </p>
              </Link>
              <Link href={demo} target="_blank">
                <p>
                  <AiFillChrome className="text-5xl border-2 border-[cyan] rounded-full transition-all hover:border-white hover:text-purple-500 hover:scale-110" />
                </p>
              </Link>
            </section>
            <section className="mt-2">
              <Link href={`/case/${slug}`}>
                <h3 className="text-md font-noto text-cyan-500 border border-cyan-500 transition-all py-2 px-3 rounded-lg cursor-pointer hover:text-white hover:bg-cyan-500 hover:border-white hover:scale-110">
                  See Case Study
                </h3>
              </Link>
            </section>
          </div>
        </main>
      </li>
    </ul>
  );
};

export default Cards;
