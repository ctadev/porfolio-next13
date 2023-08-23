import {
  Navbar,
  Projects,
  Contact,
  Hero,
  Experiences,
  About,
  Footer,
} from "./(components)";
import getProject from "./(hooks)/getProject";
import getExperince from "./(hooks)/getExperience";
import { Metadata } from "next";

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

export default async function Home() {
  const projects = await getProject();
  const experience = await getExperince();

  return (
    <main
      className={`${arizonia.variable} ${nothing.variable} ${noto.variable} ${satisfy.variable} ${quicksand.variable} ${rocksalt.variable} ${tangerine.variable} ${kaushan.variable}`}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Experiences experience={experience} />
      <Contact />
      <Footer />
    </main>
  );
}
