"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";

const ProductSlideShow = ({ product }) => {
  const [image, setImage] = useState(product.photos[0].url);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    if (imageIndex === product.photos.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex(imageIndex + 1);
  };
  const previousImage = () => {
    if (imageIndex === 0) {
      setImageIndex(product.photos.length - 1);
      return;
    }
    setImageIndex(imageIndex - 1);
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="w-full h-96 relative">
        <Image
          fill
          alt={product.photos[imageIndex].url}
          src={product.photos[imageIndex].url}
          className="rounded-lg object-cover"
        />
        <button
          onClick={() => previousImage()}
          className="transition hover:bg-zinc-100 focus:outline focus:outline-violet-200 absolute top-1/2 left-5 z-10 p-2 rounded-lg bg-zinc-50 flex items-center justify-center"
        >
          <ChevronLeftIcon width={12} height={12} />
        </button>
        <button
          onClick={() => nextImage()}
          className="transition hover:bg-zinc-100 focus:outline focus:outline-violet-200 absolute top-1/2 right-5 z-10 p-2 rounded-lg bg-zinc-50 flex items-center justify-center"
        >
          <ChevronRightIcon width={12} height={12} />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {product.photos.slice(0, 4).map((photo, index) => (
          <div
            className="h-28 w-full relative"
            onClick={() => setImageIndex(index)}
            key={photo.url}
          >
            <Image
              fill
              alt={photo.url}
              src={photo.url}
              className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlideShow;
