import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Testimonials = () => {
  return (
    <main className="bg-white-800 dark:bg-black-300 flex items-center justify-center">
      <div className="max-w-[1440px] relative pt-[60px] lg:pt-[100px] pb-[20px] flex items-center justify-center w-full mx-6">
        <section className="absolute z-20 left-1/2 top-8 md:top-12 md:whitespace-nowrap -translate-x-1/2 w-full">
          <h1 className="font-bold text-[28px] leading-[34px] sm:text-[48px] sm:leading-[55px] text-black-200 dark:text-white text-center">
            What
            <span className="relative mx-3 whitespace-nowrap">
              they say
              <div className="h-[15px] w-full bg-blue-secondary absolute left-0 bottom-2 -z-10" />
            </span>
            about me
          </h1>
        </section>
      </div>
    </main>
  );
};

export default Testimonials;
