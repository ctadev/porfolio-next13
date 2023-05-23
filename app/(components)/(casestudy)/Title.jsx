import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/(hooks)/sanity";
import Link from "next/link";

const Title = ({ title, overview, stack, img, demo, github }) => {
  return (
    <main className="mt-[200px]">
      <section>
        <h1 className="text-6xl text-center font-bold font-kaushan">
          Case Study
        </h1>
        <div className="relative w-fit">
          <h1 className="text-4xl font-bold mt-[100px]">{title}</h1>
          <div className="w-full h-[20px] bg-gradient-to-r from-purple-700 to-cyan-800 absolute left-0 -bottom-2 -z-10" />
        </div>
        <div className="mt-[60px]">
          <PortableText value={overview} />
        </div>
      </section>

      <ul className="mt-[50px] flex justify-evenly">
        <li className="case-list">
          <h2 className="case-title capitalize">Live Demo</h2>
          <Link href={demo} target="_blank">
            <div className="case-wrapper">
              <p className="text-orange-500 underline cursor-pointer">
                View Site
              </p>
            </div>
          </Link>
        </li>
        <li className="case-list">
          <h2 className="case-title">Github</h2>
          <Link href={github} target="_blank">
            <div className="case-wrapper underline">
              <p className="text-orange-500 underline cursor-pointer">
                View Code
              </p>
            </div>
          </Link>
        </li>
      </ul>

      <section className="mt-[50px] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-kaushan mb-4">Tech Stack</h2>
        <ul className="flex items-center justify-center gap-4 flex-wrap">
          {stack?.map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <div className="relative h-[50px] w-[50px] md:h-[75px] md:w-[75px] transition-all hover:scale-110">
                <Image src={urlFor(item.image).url()} fill alt="" />
              </div>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mt-8 w-full h-[60vw] max-h-[700px]">
        <Image src={urlFor(img).url()} fill alt="" />
      </section>
    </main>
  );
};

export default Title;
