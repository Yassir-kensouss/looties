"use client";
import React from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "react-device-detect";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="mt-9">
      <h2 className="text-3xl text-zinc-800 capitalize font-semibold">
        Brands
      </h2>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={isMobile ? 3 : 6}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mt-14"
      >
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b8.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={90} height={90} alt="brand" src="/assets/b9.png" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Brands;
