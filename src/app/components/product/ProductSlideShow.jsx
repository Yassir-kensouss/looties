import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const ProductSlideShow = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="w-full h-96 relative">
        <Image
          fill
          src="/assets/prod_5.jpg"
          className="rounded-lg object-cover"
        />
        <button className="transition hover:bg-zinc-100 focus:outline focus:outline-violet-200 absolute top-1/2 left-5 z-10 p-2 rounded-lg bg-zinc-50 flex items-center justify-center">
          <ChevronLeftIcon width={12} height={12} />
        </button>
        <button className="transition hover:bg-zinc-100 focus:outline focus:outline-violet-200 absolute top-1/2 right-5 z-10 p-2 rounded-lg bg-zinc-50 flex items-center justify-center">
          <ChevronRightIcon width={12} height={12} />
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="h-28 w-full relative">
          <Image
            fill
            src="/assets/prod_4.jpg"
            className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
          />
        </div>
        <div className="h-28 w-full relative">
          <Image
            fill
            src="/assets/prod_6.jpg"
            className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
          />
        </div>
        <div className="h-28 w-full relative">
          <Image
            fill
            src="/assets/prod_3.jpg"
            className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
          />
        </div>
        <div className="h-28 w-full relative">
          <Image
            fill
            src="/assets/prod_5.jpg"
            className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSlideShow;
