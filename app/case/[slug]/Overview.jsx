import React from "react";

const Overview = ({ overview }) => {
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center">
      <div className="max-w-[878px] px-6 w-full flex flex-col md:flex-row items-center justify-center md:pl-6 py-[40px] lg:py-[60px] gap-4">
        <ul className="flex flex-col gap-6">
          {overview?.map((item, index) => (
            <li key={index}>
              <p className="text-white-500 dark:text-white">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Overview;
