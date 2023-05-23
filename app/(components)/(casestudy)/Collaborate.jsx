import Link from "next/link";

const Collaborate = () => {
  return (
    <main className="h-[300px] bg-gradient-to-r from-purple-800 via-blue-500 to-orange-400 rounded-lg relative mt-[100px]">
      <div className="absolute left-10 z-20">
        <h1 className="text-4xl font-bold mt-[100px]">
          Have a project idea to collaborate with?
        </h1>
      </div>
      <section className="mt-2 absolute z-30 left-1/2 top-[60%] translate-x-1/2 translate-y-1/2">
        <Link href={`/#contact`}>
          <h3 className="text-md w-fit font-noto text-black border bg-white border-cyan-500 transition-all py-2 px-3 rounded-lg cursor-pointer hover:text-white hover:bg-cyan-500 hover:border-white hover:scale-110">
            Contact Me!
          </h3>
        </Link>
      </section>
      <div className="absolute right-4 bottom-4 h-[200px] w-[200px] rounded-full bg-pink-200/40" />
      <div className="absolute right-[20%] top-5 h-[150px] w-[150px] rounded-full bg-pink-200/40" />
      <div className="absolute left-[0%] bottom-0 h-[150px] w-[150px] rounded-full bg-pink-200/40" />
    </main>
  );
};

export default Collaborate;
