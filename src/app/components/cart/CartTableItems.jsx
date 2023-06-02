"use client";
import React, { useState } from "react";
import Quantity from "../ui-components/Quantity";
import Image from "next/image";

const CartTableItems = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="flex items-center gap-4 py-4 border-b-2 border-b-zinc-100">
        <div
          role="table head"
          style={{ width: "5%" }}
          className="flex items-center"
        >
          <input type="checkbox" className="border-2 checkbox checkbox-sm" />
        </div>
        <div role="table head" style={{ width: "65%" }}>
          <div className="flex items-start gap-4 w-full">
            <div className="w-20 h-20 relative">
              <Image
                src={item.photos[0]?.url}
                alt={item.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h5 className="text-md mb-1 text-gray-800 font-medium w-52 text-ellipsis whitespace-nowrap overflow-hidden">
                {item.name}
              </h5>
              <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                <span>Green</span> |<span>M</span>
              </div>
            </div>
          </div>
        </div>
        <div role="table head" style={{ width: "15%" }}>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div role="table head" style={{ width: "15%" }}>
          <p className="text-sm text-zinc-600 font-semibold">${item.price}</p>
        </div>
      </div>
    </>
  );
};

export default CartTableItems;
