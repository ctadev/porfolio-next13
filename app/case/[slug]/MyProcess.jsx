import Image from "next/image";
import { myprocess } from "../../(dummy_data)/myprocess";

const MyProcess = () => {
  return (
    <main className="bg-white dark:bg-black-200 flex items-center justify-center">
      <div className="max-w-[878px] w-full px-6 relative pt-[40px] pb-[40px] md:py-[60px] flex flex-col items-center justify-center">
        <section className="w-full">
          <h3 className="text-blue-light dark:text-blue-dark font-semibold">
            Way of work
          </h3>
          <h1 className="font-semibold text-[28px] leading-[29px] md:text-[32px] md:leading-[34px] text-black-200 dark:text-white">
            My Process
          </h1>
          <ul className="flex flex-wrap items-center justify-between gap-8 mt-8 w-full">
            {myprocess.map((item) => (
              <li
                key={item.img}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="relative h-[75px] w-[75px] md:h-[100px] md:w-[100px] dark:bg-black-300 bg-white-800 rounded-full">
                  <Image
                    src={item.img}
                    alt="definition"
                    fill
                    className="p-4 md:p-6"
                  />
                </div>
                <p className="text-black-300 dark:text-white font-semibold md:text-[20px] md:leading-[26px]">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default MyProcess;
