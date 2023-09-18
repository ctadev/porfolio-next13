import React from "react";
import Image from "next/image";

const CaseStudies = () => {
  return (
    <main>
      <div>
        <ul>
          <li className="h-[327px] w-[550px] bg-[#5CAFFC] rounded-[16px] flex items-end justify-center">
            <div className="relative h-[263px] w-[443px]">
              <Image src="/morrent-laptop.png" fill alt="case study" />
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default CaseStudies;
