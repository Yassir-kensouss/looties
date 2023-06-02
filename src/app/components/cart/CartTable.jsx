"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Quantity from "../ui-components/Quantity";
import CartTableItems from "./CartTableItems";

const CartTable = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    setItems(cartItems);
  }, []);

  return (
    <div className="w-full lg:w-4/6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">Cart</h2>
        <button className="flex items-center gap-2 font-medium p-2 rounded-lg transition text-sm active:bg-zinc-100 focus:outline focus:outline-zinc-100 hover:bg-zinc-50">
          <TrashIcon width={15} height={15} />
          Remove
        </button>
      </div>
      <div className="mt-8 h-96 overflow-auto" role="table">
        <div
          role="table row"
          className="flex items-center gap-4 py-4 border-b-2 border-b-zinc-100 sticky top-0 bg-white z-10"
        >
          <div
            role="table head"
            style={{ width: "5%" }}
            className="flex items-center"
          >
            <input type="checkbox" className="border-2 checkbox checkbox-sm" />
          </div>
          <div role="table head" style={{ width: "65%" }}>
            <p className="uppercase text-xs text-zinc-400 font-semibold">
              Product
            </p>
          </div>
          <div role="table head" style={{ width: "15%" }}>
            <p className="uppercase text-xs text-zinc-400 font-semibold">
              Quantity
            </p>
          </div>
          <div role="table head" style={{ width: "15%" }}>
            <p className="uppercase text-xs text-zinc-400 font-semibold">
              Price
            </p>
          </div>
        </div>
        {items.map(item => (
          <CartTableItems item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartTable;
