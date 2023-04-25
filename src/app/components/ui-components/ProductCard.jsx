import { PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const ProductCard = props => {
  const { photo, title, price, oldPrice } = props;
  return (
    <div>
      <Image src={photo} width={350} height={400} className="rounded-lg" />
      <div className="flex items-start justify-between mt-4">
        <div>
          <h3 className="text-xl text-gray-800 capitalize mb-2">{title}</h3>
          <div className="flex items-start gap-2">
            <span className="text-2xl text-gray-800 font-semibold">
              ${price}
            </span>
            {oldPrice ? (
              <del className="text-md text-gray-400">${oldPrice}</del>
            ) : null}
          </div>
        </div>
        <button className="rounded-lg text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-800 w-12 h-12 flex items-center justify-center mr-6">
          <ShoppingCartIcon width="100%" height={22} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
