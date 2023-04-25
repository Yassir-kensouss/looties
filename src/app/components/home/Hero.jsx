"use client";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "../ui-components/Button";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { A11y, Pagination } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="hero-slideshow-wrapper relative">
      <Swiper
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
        className="hero-slideshow rounded-2xl"
        spaceBetween={50}
        slidesPerView={1}
        ref={sliderRef}
      >
        <SwiperSlide>
          <div className="relative">
            <figure className="hero-slideshow-overlay">
              <Image
                className="rounded-2xl object-cover"
                src="/assets/slide1.jpg"
                fill
                alt="slideshow image"
              />
              <figcaption className="leading-tight lg:leading-tight capitalize z-20 w-4/5 font-semibold text-3xl lg:text-7xl text-center text-white absolute top-1/2	left-1/2 -translate-y-1/2 -translate-x-1/2">
                <span className="leading-9">
                  Level up you style with our new collection
                </span>
                <Button
                  text="shop now"
                  icon={<ArrowRightIcon width={18} height={18} />}
                  classNames="mt-6 m-auto"
                />
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <figure className="hero-slideshow-overlay">
              <Image
                className="rounded-2xl object-cover"
                src="/assets/slide2.jpg"
                fill
                alt="slideshow image"
              />
              <figcaption className="leading-tight lg:leading-tight capitalize z-20 w-4/5 font-semibold text-3xl lg:text-7xl text-center text-white absolute top-1/2	left-1/2 -translate-y-1/2 -translate-x-1/2">
                Level up you style with our new collection
                <Button
                  text="shop now"
                  icon={<ArrowRightIcon width={18} height={18} />}
                  classNames="mt-6 m-auto"
                />
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <figure className="hero-slideshow-overlay">
              <Image
                className="rounded-2xl object-cover"
                src="/assets/slide3.jpg"
                fill
                alt="slideshow image"
              />
              <figcaption className="leading-tight lg:leading-tight capitalize z-20 w-4/5 font-semibold text-3xl lg:text-7xl text-center text-white absolute top-1/2	left-1/2 -translate-y-1/2 -translate-x-1/2">
                Level up you style with our new collection
                <Button
                  text="shop now"
                  icon={<ArrowRightIcon width={18} height={18} />}
                  classNames="mt-6 m-auto"
                />
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-5 right-5 z-30">
        <button
          ref={navigationNextRef}
          className="prev-arrow bg-zinc-50 p-3 rounded-l-lg active:bg-zinc-200 hover:bg-zinc-100 transition border-r-2"
          onClick={handlePrev}
        >
          <ChevronLeftIcon width={18} height={18} />
        </button>
        <button
          ref={navigationPrevRef}
          className="next-arrow bg-zinc-50 p-3 rounded-r-lg active:bg-zinc-200 hover:bg-zinc-100 transition"
          onClick={handleNext}
        >
          <ChevronRightIcon width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
