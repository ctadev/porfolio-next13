import { PortableText } from "@portabletext/react";

const Goals = ({ goal1, goal2 }) => {
  return (
    <main className="mt-[100px]">
      <section className="w-3/4">
        <div className="relative w-fit">
          <h1 className="text-4xl font-bold mt-[100px]">
            Project Purpose and Goals
          </h1>
          <div className="w-full h-[20px] bg-gradient-to-r from-purple-700 to-cyan-800 absolute left-0 -bottom-2 -z-10" />
        </div>
        <div className="mt-[50px]">
          <PortableText value={goal1} />
        </div>
        <div className="mt-[20px]">
          <PortableText value={goal2} />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense"></section>
    </main>
  );
};

export default Goals;
