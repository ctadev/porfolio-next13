import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Testimonials = () => {
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center pb-[10px] md:pb-[20px]">
      <div className="max-w-[1440px] w-full relative pt-[100px] md:pt-[110px] flex items-center justify-center px-6">
        <section className="absolute z-20 left-1/2 top-8 md:top-12 md:whitespace-nowrap -translate-x-1/2 w-[80%]">
          <h1 className="font-bold text-[36px] leading-[41px] md:text-[48px] md:leading-[55px] text-black-200 dark:text-white text-center break-words">
            What
            <span className="relative mx-3 whitespace-nowrap">
              they say
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-1 -z-10" />
            </span>
            {/* <span className="relative ml-3 whitespace-nowrap md:hidden">
              they
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-1 -z-10" />
            </span>
            <span className="relative mx-3 whitespace-nowrap md:hidden">
              say
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-1 -z-10" />
            </span> */}
            about me
          </h1>
        </section>
      </div>
    </main>
  );
};

export default Testimonials;
