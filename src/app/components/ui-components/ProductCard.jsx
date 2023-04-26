import { Transition } from "@headlessui/react";
import { PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductCard = props => {
  const { photo, title, price, oldPrice, preview } = props;
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <div className="relative cursor-pointer">
        <Image src={photo} width={350} height={400} className="rounded-lg" />
        <Transition
          show={mouseEnter}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Image
            src={preview}
            width={350}
            height={400}
            className="rounded-lg absolute top-0 left-0 z-20"
          />
        </Transition>
      </div>
      <div className="flex items-start justify-between mt-4">
        <div>
          <Link href="#" className="cursor-pointer hover:opacity-80 transition">
            <h3 className="text-xl text-gray-800 capitalize mb-2">{title}</h3>
          </Link>
          <div className="flex items-start gap-2">
            <span className="text-2xl text-gray-800 font-semibold">
              ${price}
            </span>
            {oldPrice ? (
              <del className="text-md text-gray-400">${oldPrice}</del>
            ) : null}
          </div>
        </div>
        <button className="rounded-lg text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-800 w-12 h-12 flex items-center justify-center mr-0 lg:mr-6">
          <ShoppingCartIcon width="100%" height={22} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
