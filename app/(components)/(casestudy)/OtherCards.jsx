import Image from "next/image";
import { urlFor } from "@/app/(hooks)/sanity";
import Link from "next/link";

const OtherCards = ({ name, img, description, slug }) => {
  return (
    <main className="border border-white rounded-md p-4 flex flex-col items-center justify-between gap-2 bg-[#202A3C]">
      <div className="relative w-full h-[250px] rounded-md">
        <Image src={urlFor(img).url()} fill alt="" />
      </div>
      <div className="flex flex-col items-center gap-4 mt-2">
        <h1 className="text-2xl font-kaushan">{name}</h1>
        <p className="text-center">{description}</p>
        <Link href={`/case/${slug}`}>
          <button className="border border-white px-3 py-2 rounded-md hover:bg-gradient-to-r from-purple-500 to-pink-200">
            See Case Study
          </button>
        </Link>
      </div>
    </main>
  );
};

export default OtherCards;
