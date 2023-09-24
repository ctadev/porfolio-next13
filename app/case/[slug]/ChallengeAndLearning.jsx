import Image from "next/image";

const ChallengeAndLearning = ({ challenges, learnings }) => {
  return (
    <main className="bg-white dark:bg-black-200 flex items-center justify-center">
      <div className="max-w-[878px] w-full px-6 relative pt-[40px] pb-[40px] md:py-[60px] flex flex-col items-center justify-center">
        <section className="w-full">
          <h3 className="text-blue-light dark:text-blue-dark font-semibold">
            Problem
          </h3>
          <h1 className="font-semibold text-[28px] leading-[29px] md:text-[32px] md:leading-[34px] text-black-200 dark:text-white">
            Challenges & Learnings
          </h1>
        </section>

        <section className="mt-[30px] bg-white-800 dark:bg-black-300 rounded-[10px] py-[20px] px-4 md:py-[40px] md:px-10">
          <h2 className="pb-[30px] text-[#E15A46] font-semibold text-[18px] leading-[29px] md:text-[20px] md:leading-[26px] uppercase">
            Challenges
          </h2>
          <ul className="flex flex-col gap-6">
            {challenges.map((item, index) => (
              <li className="flex gap-3 items-start" key={index}>
                <Image
                  src="/Group.svg"
                  alt="challenges"
                  height={20}
                  width={20}
                  className="pt-1"
                />
                <p className="text-white-500 dark:text-white-800 text-[14px] leading-[22px] md:text-[18px] md:leading-[29px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-[30px] bg-white-800 dark:bg-black-300 rounded-[10px] py-[20px] px-4 md:py-[40px] md:px-10">
          <h2 className="pb-[30px] text-[#02BC7D] font-semibold text-[18px] leading-[29px] md:text-[20px] md:leading-[26px] uppercase">
            Learnings
          </h2>
          <ul className="flex flex-col gap-6">
            {learnings.map((item, index) => (
              <li className="flex gap-3 items-start" key={index}>
                <Image
                  src="/tick.svg"
                  alt="challenges"
                  height={20}
                  width={20}
                  className="pt-1"
                />
                <p className="text-white-500 dark:text-white-800 text-[14px] leading-[22px] md:text-[18px] md:leading-[29px]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default ChallengeAndLearning;
