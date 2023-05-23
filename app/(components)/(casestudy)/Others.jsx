import OtherCards from "./OtherCards";

const Others = ({ other, slug }) => {
  const filtered = other.filter((item) => item.slug !== slug);
  return (
    <section>
      <div className="relative w-fit">
        <h1 className="text-4xl font-bold mt-[100px]">Other Case Studies</h1>
        <div className="w-full h-[20px] bg-gradient-to-r from-purple-700 to-cyan-800 absolute left-0 -bottom-2 -z-10" />
      </div>
      <main className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
        {filtered?.map((item, index) => (
          <OtherCards
            key={item.slug}
            name={item.name}
            slug={item.slug}
            description={item.description}
            img={item.img}
          />
        ))}
      </main>
    </section>
  );
};

export default Others;
