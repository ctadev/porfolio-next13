import Image from "next/image";
import { urlFor } from "@/app/(hooks)/sanity";

const FigmaTemplate = ({ image }) => {
  return (
    <main>
      <div className="h-[40px] md:h-[106px] w-full bg-blue-light dark:bg-blue-dark flex items-center justify-center">
        <h1 className="text-center font-semibold uppercase text-white text-[14px] leading-[20px] md:text-[32px] md:leading-[34px]">
          High-fidelity figma design
        </h1>
      </div>
      <div className="relative h-[209px] md:h-[600px] lg:h-[862px] w-full">
        <Image
          src={urlFor(image).url()}
          alt="jobit"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
};

export default FigmaTemplate;
