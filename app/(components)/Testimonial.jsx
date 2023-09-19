"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Svg } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { testimonials } from "../(dummy_data)/testimonial";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
  const [widthSize, setWidthSize] = useState(null);

  function logitwidth() {
    setWidthSize(window.innerWidth);
  }

  useEffect(() => {
    setWidthSize(window.innerWidth);
    function watchScroll() {
      window.addEventListener("resize", logitwidth);
    }
    watchScroll();
    return () => {
      window.removeEventListener("resize", logitwidth);
    };
  }, []);

  return (
    <main className="flex items-center justify-center bg-white-800 dark:bg-black-300 pb-[40px] md:pb-[60px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={widthSize > 800 ? true : false}
        navigation={widthSize > 800 ? true : false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-[1440px] w-full"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.img}>
            <section
              className="flex flex-col md:flex-row gap-6 mt-12 px-6 sm:px-[60px] xl:px-[100px]"
              key={item.img}
            >
              <div className="rounded-[16px] h-[328px] w-full md:min-h-[328px] md:min-w-[328px] relative">
                <Image
                  src={item.img}
                  alt="client"
                  fill
                  className="rounded-[16px]"
                />
              </div>

              <aside className="flex flex-col gap-4 justify-center">
                <ul className="flex gap-1">
                  <li>
                    <Svg iconName="star" color="#FFBE62" />
                  </li>
                  <li>
                    <Svg iconName="star" color="#FFBE62" />
                  </li>
                  <li>
                    <Svg iconName="star" color="#FFBE62" />
                  </li>
                  <li>
                    <Svg iconName="star" color="#FFBE62" />
                  </li>
                  <li>
                    <Svg iconName="star" color="#FFBE62" />
                  </li>
                </ul>

                <p className="text-white-500 dark:text-white">
                  {item.description}
                </p>

                <div>
                  <ul className="flex items-center gap-1">
                    <li className="h-[1px] w-[10px] bg-black dark:bg-white"></li>
                    <li className="font-semibold">{item.author}</li>
                  </ul>
                  <p className="text-white-500 dark:text-white-800">
                    {item.profession}
                  </p>
                </div>
              </aside>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Testimonial;
