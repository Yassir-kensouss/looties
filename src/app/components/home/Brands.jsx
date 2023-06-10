"use client";
import React, { useState } from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from "react-device-detect";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useQuery } from "react-query";
import { fetchBrands } from "@/services/carousals";
import BrandsSkeleton from "../ui-components/skeletons/Brands";

const Brands = () => {
  const [slides, setSlides] = useState([]);

  const { isLoading } = useQuery(
    "brands-slides",
    async () => {
      const res = await fetchBrands();
      const data = await res.data.brands;
      setSlides(data);
    },
    { refetchOnWindowFocus: false }
  );

  return (
    <section className="mt-9 w-full">
      <h2 className="text-3xl text-zinc-800 capitalize font-semibold">
        Brands
      </h2>
      {isLoading ? (
        <BrandsSkeleton />
      ) : (
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
          {slides.map(slide => (
            <SwiperSlide key={slide._id}>
              <Image
                width={90}
                height={90}
                alt={slide.brandName}
                title={slide.brandName}
                src={slide.photo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Brands;
