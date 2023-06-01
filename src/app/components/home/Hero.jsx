"use client";
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { A11y, Pagination } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { useQuery } from "react-query";
import { API_URL } from "@/config";
import CustomRedirect from "../ui-components/CustomRedirect";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchHeroCarousal } from "@/services/carousals";

const Hero = () => {
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [sliderEnd, setSliderEnd] = useState(false);
  const [sliderStart, setSliderStart] = useState(false);
  const [slides, setSlides] = useState([]);

  const { isLoading } = useQuery(
    "hero-slides",
    async () => {
      const res = await fetchHeroCarousal();
      const data = await res.data.slides;
      setSlides(data);
    },
    { refetchOnWindowFocus: false }
  );

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    setSliderEnd(false);
    sliderRef.current.swiper.on("reachBeginning", () => {
      setSliderStart(true);
    });
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    setSliderStart(false);
    sliderRef.current.swiper.on("reachEnd", () => {
      setSliderEnd(true);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height={500} borderRadius="1rem" />
      ) : (
        <div className="hero-slideshow-wrapper relative">
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{ clickable: true }}
            className="hero-slideshow rounded-2xl"
            spaceBetween={50}
            slidesPerView={1}
            ref={sliderRef}
          >
            {slides.map(slide => (
              <SwiperSlide key={slide._id}>
                <div className="relative">
                  <figure className="hero-slideshow-overlay">
                    <Image
                      className="rounded-2xl object-cover"
                      src={slide.photo}
                      fill
                      alt={slide.sub_caption}
                      priority
                    />
                    <figcaption className="leading-tight lg:leading-tight capitalize z-20 w-4/5 font-semibold text-3xl lg:text-7xl text-center text-white absolute top-1/2	left-1/2 -translate-y-1/2 -translate-x-1/2">
                      <span className="leading-9">{slide.caption}</span>
                      <CustomRedirect
                        text="shop now"
                        icon={<ArrowRightIcon width={18} height={18} />}
                        className="mt-6 m-auto"
                        href={slide.link}
                      />
                    </figcaption>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-5 right-5 z-30">
            <button
              disabled={sliderStart}
              ref={navigationNextRef}
              className={`${
                sliderStart ? "opacity-80" : "opacity-100"
              } prev-arrow bg-zinc-50 p-3 rounded-l-lg active:bg-zinc-200 hover:bg-zinc-100 transition border-r-2`}
              onClick={handlePrev}
            >
              <ChevronLeftIcon width={18} height={18} />
            </button>
            <button
              disabled={sliderEnd}
              ref={navigationPrevRef}
              className={`${
                sliderEnd ? "opacity-80" : "opacity-100"
              } next-arrow bg-zinc-50 p-3 rounded-r-lg active:bg-zinc-200 hover:bg-zinc-100 transition`}
              onClick={handleNext}
            >
              <ChevronRightIcon width={18} height={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
