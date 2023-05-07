"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const reduceQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };
  return (
    <div className="w-8/12">
      <div className="divide-y">
        <div className="pb-4">
          <h1 className="text-3xl font-semibold">Blazer Jacket</h1>
          <div className="flex items-center gap-1 my-2">
            <StarIcon width={17} height={17} className="text-amber-400" />
            <StarIcon width={17} height={17} className="text-amber-400" />
            <StarIcon width={17} height={17} className="text-amber-400" />
            <StarIcon width={17} height={17} className="text-amber-400" />
            <StarIcon width={17} height={17} className="text-gray-200" />
            <span className="text-sm">(5)</span>
          </div>
          <p className="text-xl font-semibold text-gray-700">$250</p>
        </div>
        <div className="flex items-start gap-8 py-4">
          <div>
            <h4 className="mb-2 text-sm text-gray-800 font-medium">
              Available Size
            </h4>
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 flex items-center justify-center capitalize rounded-lg border-2 cursor-pointer transition hover:bg-gray-800 hover:text-white hover:border-gray-800 border-zinc-200">
                S
              </span>
              <span className="w-10 h-10 flex items-center justify-center capitalize rounded-lg border-2 cursor-pointer transition hover:bg-gray-800 hover:text-white hover:border-gray-800 border-zinc-200">
                M
              </span>
              <span className="w-10 h-10 flex items-center justify-center capitalize rounded-lg border-2 cursor-pointer transition hover:bg-gray-800 hover:text-white hover:border-gray-800 border-zinc-200">
                L
              </span>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm text-gray-800 font-medium">
              Available Colors
            </h4>
            <div className="flex items-center gap-2">
              <span
                style={{ background: "#db2777" }}
                className="w-10 h-10 flex items-center justify-center capitalize rounded-lg cursor-pointer transition hover:opacity-80"
              ></span>
              <span
                style={{ background: "#7e22ce" }}
                className="w-10 h-10 flex items-center justify-center capitalize rounded-lg cursor-pointer transition hover:opacity-80"
              ></span>
              <span
                style={{ background: "#0891b2" }}
                className="w-10 h-10 flex items-center justify-center capitalize rounded-lg cursor-pointer transition hover:opacity-80"
              ></span>
            </div>
          </div>
        </div>
        <div className="py-4">
          <p className="mb-2 text-sm">
            <span className="font-semibold">Last one left</span> - make it
            yours!
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 p-2 border border-zinc-200 rounded-lg w-fit">
              <button
                onClick={reduceQuantity}
                className="pl-2 pr-2 hover:opacity-80 transition"
              >
                -
              </button>
              <span className="w-18">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="pl-2 pr-2 hover:opacity-80 transition"
              >
                +
              </button>
            </div>
            <div>
              <button className="bg-gray-800 text-white rounded-lg p-3 text-sm">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
