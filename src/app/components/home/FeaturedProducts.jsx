import React, { useCallback, useRef, useState } from "react";
import ProductCard from "../ui-components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper";
import { isMobile } from "react-device-detect";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const FeaturedProducts = () => {
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [sliderEnd, setSliderEnd] = useState(false);
  const [sliderStart, setSliderStart] = useState(false);

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
    <section className="mt-20">
      <div className="flex items-start justify-between">
        <h2 className="text-3xl text-zinc-800 capitalize font-semibold">
          Featured Products
        </h2>
        <div className="flex items-center">
          <button
            disabled={sliderStart}
            ref={navigationNextRef}
            className={`${
              sliderStart ? "opacity-50" : "opacity-100"
            } prev-arrow bg-zinc-50 p-3 rounded-l-lg active:bg-zinc-200 hover:bg-zinc-100 transition border-r-2`}
            onClick={handlePrev}
          >
            <ChevronLeftIcon width={18} height={18} />
          </button>
          <button
            disabled={sliderEnd}
            ref={navigationPrevRef}
            className={`${
              sliderEnd ? "opacity-50" : "opacity-100"
            } next-arrow bg-zinc-50 p-3 rounded-r-lg active:bg-zinc-200 hover:bg-zinc-100 transition`}
            onClick={handleNext}
          >
            <ChevronRightIcon width={18} height={18} />
          </button>
        </div>
      </div>
      <div className="mt-2">
        <Swiper
          modules={[A11y]}
          spaceBetween={50}
          slidesPerView={isMobile ? 1 : 3}
          className="mt-14"
          ref={sliderRef}
          navigation={{
            prevEl: ".prev-arrow",
            nextEl: ".next-arrow",
          }}
        >
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_5.jpg"
              preview="/assets/prod_4.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_4.jpg"
              preview="/assets/prod_4.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_3.jpg"
              preview="/assets/prod_4.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_4.jpg"
              preview="/assets/prod_4.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_5.jpg"
              preview="/assets/prod_4.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <div className="swiper-scrollbar"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
