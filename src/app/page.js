"use client";
import Image from "next/image";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <main className="mx-auto gap-5 max-w-7xl p-6 lg:px-8">
      <Hero />
    </main>
  );
}
