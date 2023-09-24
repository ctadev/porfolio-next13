import { urlFor } from "../../(hooks)/sanity";
import Image from "next/image";

const TechStack = ({ stack, role, startDate, endDate }) => {
  return (
    <main className="bg-white dark:bg-black-200 flex items-center justify-center">
      <div className="max-w-[878px] w-full px-6 relative pt-[40px] pb-[40px] md:pt-[50px] md:pb-[60px] flex flex-col items-center justify-center">
        <section className="w-full">
          <ul className="flex flex-col gap-6 md:flex-row md:gap-0 md:justify-between">
            <li>
              <h2 className={s.li_h2}>My Role</h2>
              <p className={s.li_p}>{role}</p>
            </li>
            <li>
              <h2 className={s.li_h2}>Start Date</h2>
              <p className={s.li_p}>{startDate}</p>
            </li>
            <li>
              <h2 className={s.li_h2}>End Date</h2>
              <p className={s.li_p}>{endDate}</p>
            </li>
          </ul>
        </section>

        <section className="mt-[50px] md:mt-[80px] flex flex-col justify-start mb-[20px]">
          <h3 className="font-semibold text-[12px] leading-[17px] text-blue-light dark:text-blue-dark md:text-[14px] md:leading-[20px]">
            Technoloigies used
          </h3>
          <p className="font-semibold text-[28px] leading-[29px] text-black-200 dark:text-white md:text-[32px] md:leading-[34px]">
            Tech Stack
          </p>
        </section>

        <section className="flex gap-2 flex-wrap items-center justify-center">
          {stack?.map((item, index) => (
            <div
              key={index}
              className="flex h-fit flex-col items-center flex-wrap transition-all hover:scale-110"
            >
              <div className="h-[70px] w-[70px] relative lg:h-[100px] lg:w-[100px]">
                <Image
                  src={urlFor(item.image).url()}
                  alt=""
                  fill
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

export default TechStack;

const s = {
  li_h2:
    "text-black-400 dark:text-white-500 font-semibold text-[14px] leading-[20px] md:text-[18px] md:leading-[29px]",
  li_p: "font-semibold text-black-200 dark:text-white text-[20px] leading-[26px] md:text-[24px] md:leading-[31px]",
};
