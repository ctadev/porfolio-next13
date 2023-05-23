/* eslint-disable @next/next/no-img-element */
import { urlFor } from "@/app/(hooks)/sanity";

const Gallery = ({ gallery }) => {
  return (
    <main
      className={`grid grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-4 max-h-[700px] overflow-hidden rounded-lg ${
        gallery && "mt-[100px]"
      }`}
    >
      {gallery?.map((item, index) => (
        <img
          src={urlFor(item).url()}
          alt="photos"
          key={index}
          className="object-cover h-full w-full lg:[&:nth-child(3)]:row-span-2 lg:[&:nth-child(4)]:col-span-2 rounded-lg"
        />
      ))}
    </main>
  );
};

export default Gallery;
