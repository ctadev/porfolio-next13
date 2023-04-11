import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./(components)/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="h-[100vh] bg-red-500">

      </div>
    </main>
  );
}
