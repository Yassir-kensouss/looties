"use client";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Quantity from "../ui-components/Quantity";
import CartTableItems from "./CartTableItems";
import { AppContext } from "@/app/layout";

const CartTable = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    setItems(cartItems);
  }, []);

  return (
    <div className="w-full lg:w-4/6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">Cart</h2>
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
          ></div>
          <div role="table head" style={{ width: "65%" }}>
            <p className="uppercase text-xs text-zinc-400 font-semibold ml-1">
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
        {items && items.length > 0 ? (
          items.map(item => (
            <CartTableItems
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              item={item}
              setItems={setItems}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center text-gray-600 py-10">
            <ShoppingCartIcon width={50} height={50} />
            <p className="text-center mt-3 text-gray-800 text-sm">
              You have not add
              <br /> any item to your cart yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartTable;
