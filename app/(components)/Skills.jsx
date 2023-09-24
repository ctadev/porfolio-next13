import { urlFor } from "../(hooks)/sanity";
import Image from "next/image";

const Skills = ({ skills }) => {
  return (
    <main className="bg-white dark:bg-black-200 flex items-center justify-center">
      <div className="max-w-[1440px] relative pt-[100px] pb-[40px] md:pt-[140px] md:pb-[80px] flex items-center justify-center">
        <section className="absolute z-20 left-1/2 top-8 md:top-12 whitespace-nowrap -translate-x-1/2">
          <h1 className="font-bold text-[36px] leading-[41px] md:text-[48px] md:leading-[55px] text-black-200 dark:text-white">
            My Skills
          </h1>
          <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-0 -z-10" />
        </section>

        <section className="flex gap-2 flex-wrap items-center justify-center lg:w-[70%]">
          {skills?.map((item, index) => (
            <div
              key={index}
              className="flex h-fit flex-col items-center flex-wrap transition-all hover:scale-110"
            >
              <div className="h-[70px] w-[70px] relative lg:h-[100px] lg:w-[100px]">
                <Image
                  src={urlFor(item.image).url()}
                  alt=""
                  fill={true}
                  className="dark:invert"
                />
              </div>
              <p className="hidden md:block">{item.name}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Skills;
