import Image from "next/image";
import { urlFor } from "@/app/(hooks)/sanity";
import { PortableText } from "@portabletext/react";

const Problem = ({ image, statement }) => {
  return (
    <main className="bg-white dark:bg-black-200 flex items-center justify-center">
      <div className="max-w-[878px] px-6 relative pt-[40px] pb-[40px] md:py-[60px] flex flex-col items-center justify-center">
        <section className="">
          <h3 className="text-blue-light dark:text-blue-dark font-semibold">
            Problem
          </h3>
          <h1 className="font-semibold text-[28px] leading-[29px] md:text-[32px] md:leading-[34px] text-black-200 dark:text-white">
            Problem Statement
          </h1>
          <div className="text-white-500 dark:text-white text-[14px] leading-[22px] md:text-[20px] md:leading-[30px] mt-[20px]">
            <PortableText value={statement} />
          </div>
          <div className="relative h-[189px] md:h-[478px] w-full mt-[20px] rounded-[10px]">
            <Image
              src={urlFor(image).url()}
              alt="car"
              fill
              className="rounded-[10px] object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Problem;
