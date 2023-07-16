"use client";
import Hero from "./components/home/Hero";
import Brands from "./components/home/Brands";
import Experiences from "./components/home/Experiences";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Categories from "./components/home/Categories";
import CallToAction from "./components/home/CallToAction";
import Subscribe from "./components/home/Subscribe";

export default function Home() {
  return (
    <main className="mx-auto gap-5 max-w-7xl p-6 lg:px-8">
      <Hero />
      <Brands />
      <Experiences />
      <Categories />
      <FeaturedProducts />
      <CallToAction />
      <Subscribe />
    </main>
  );
}
