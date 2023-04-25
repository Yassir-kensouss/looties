import React from "react";
import ProductCard from "../ui-components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper";
import { isMobile } from "react-device-detect";

const FeaturedProducts = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl text-zinc-800 capitalize font-semibold">
        Featured Products
      </h2>
      <div className="mt-2">
        <Swiper
          modules={[A11y]}
          spaceBetween={50}
          slidesPerView={isMobile ? 1 : 3}
          className="mt-14"
        >
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_5.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_4.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_3.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_4.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              photo="/assets/prod_5.jpg"
              title="Summer Vibe T-shirt"
              price="40"
              oldPrice="67"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProducts;
