import { PortableText } from "@portabletext/react";

const Takeaways = ({ learnings, challenges }) => {
  return (
    <main className="mt-[50px]">
      <div className="relative w-fit">
        <h1 className="text-4xl font-bold mt-[100px]">
          <span className="text-green-500">Learnings</span> and{" "}
          <span className="text-red-500">Challenges</span>
        </h1>
        <div className="w-full h-[20px] bg-gradient-to-r from-red-500 to-green-500 absolute left-0 -bottom-6 -z-10" />
      </div>

      <section className="flex flex-col gap-8 mt-[50px] md:flex-row">
        <div className="border border-green-500 rounded-md p-6 bg-green-100/30">
          <h4 className="text-green-500 text-xl font-kaushan">Learned:</h4>
            <PortableText value={learnings} />
        </div>

        <aside className="border border-red-500 rounded-md p-6 bg-red-100/30">
          <h4 className="text-red-500 text-xl font-kaushan">Problems:</h4>
            <PortableText value={challenges} />
        </aside>
      </section>
    </main>
  );
};

export default Takeaways;
