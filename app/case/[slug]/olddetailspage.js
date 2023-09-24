import React from "react";
import Title from "@/app/(components)/(casestudy)/Title";
import Goals from "@/app/(components)/(casestudy)/Goals";
import Gallery from "@/app/(components)/(casestudy)/Gallery";
import Takeaways from "@/app/(components)/(casestudy)/Takeaways";
import Others from "@/app/(components)/(casestudy)/Others";
import Collaborate from "@/app/(components)/(casestudy)/Collaborate";

import { Navbar, Footer } from "@/app/(components)";
import getCurrentProject from "@/app/(hooks)/getCurrentProject";
import getProject from "@/app/(hooks)/getProject";

import {
  Arizonia,
  Nothing_You_Could_Do,
  Noto_Sans_JP,
  Quicksand,
  Rock_Salt,
  Satisfy,
  Tangerine,
  Kaushan_Script,
} from "next/font/google";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  weight: ["400"],
});
const arizonia = Arizonia({
  subsets: ["latin"],
  variable: "--font-arizonia",
  weight: ["400"],
});
const nothing = Nothing_You_Could_Do({
  subsets: ["latin"],
  variable: "--font-nothing",
  weight: ["400"],
});
const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400"],
});
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400"],
});
const rocksalt = Rock_Salt({
  subsets: ["latin"],
  variable: "--font-rocksalt",
  weight: ["400"],
});
const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: ["400"],
});
const tangerine = Tangerine({
  subsets: ["latin"],
  variable: "--font-tangerine",
  weight: ["400"],
});

const Page = async ({ params }) => {
  const slug = params.slug;
  const projects = await getCurrentProject(slug);
  const other = await getProject();

  return (
    <main
      className={`${arizonia.variable} ${kaushan.variable} ${nothing.variable} ${noto.variable} ${satisfy.variable} ${quicksand.variable} ${rocksalt.variable} ${tangerine.variable} flex items-center justify-center`}
    >
      <section className="w-full max-w-[1200px] px-4">
        <Navbar />
        <Title
          title={projects.name}
          overview={projects.overview}
          stack={projects.stack}
          img={projects.img}
          demo={projects.demo}
          github={projects.github}
        />
        <Goals goal1={projects.goal1} goal2={projects.goal2} />
        <Gallery gallery={projects.gallery} />
        <Takeaways
          learnings={projects.learnings}
          challenges={projects.challenges}
        />
        <Others other={other} slug={slug} />
        <Collaborate />
        <Footer />
      </section>
    </main>
  );
};

export default Page;
