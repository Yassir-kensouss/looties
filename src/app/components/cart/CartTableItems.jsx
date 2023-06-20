"use client";
import React, { useContext, useEffect, useState } from "react";
import Quantity from "../ui-components/Quantity";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import { AppContext } from "@/app/layout";
import Link from "next/link";

const CartTableItems = ({ item, setItems }) => {
  const [quantity, setQuantity] = useState(1);
  const { total, setTotal, setCartItems } = useContext(AppContext);

  const removeCartItem = () => {
    // Update localstorage cart items
    const items = JSON.parse(localStorage.getItem("cart"));
    const newItems = items.filter(el => el._id !== item._id);
    localStorage.setItem("cart", JSON.stringify(newItems));
    setItems(newItems);
    setCartItems(newItems);

    // Update total price
    let totalPrices = 0;
    newItems.map(el => {
      totalPrices = totalPrices + el.price;
    });

    setTotal({
      ...total,
      total: totalPrices,
      grandTotal: totalPrices,
    });
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart"));
    setQuantity(item.quantity);
  }, []);

  return (
    <>
      <div className="flex items-center gap-4 py-4 border-b-2 border-b-zinc-100">
        <div
          role="table head"
          style={{ width: "5%" }}
          className="flex items-center ml-1"
        >
          <button
            onClick={removeCartItem}
            className="flex items-center gap-2 font-medium p-2 rounded-lg transition text-sm active:bg-zinc-100 focus:outline focus:outline-zinc-300 hover:bg-zinc-50"
          >
            <TrashIcon width={15} height={15} />
          </button>
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
              <Link href={`/products/${item.productId}`}>
                <h5 className="text-md mb-1 text-gray-800 font-medium w-52 text-ellipsis whitespace-nowrap overflow-hidden">
                  {item.name}
                </h5>
              </Link>
              <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                <span
                  className="w-6 h-6 rounded-md"
                  style={{ backgroundColor: `#${item.color}` }}
                ></span>{" "}
                |<span>{item.size}</span>
              </div>
            </div>
          </div>
        </div>
        <div role="table head" style={{ width: "15%" }}>
          <Quantity item={item} quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div role="table head" style={{ width: "15%" }}>
          <p className="text-sm text-zinc-600 font-semibold">
            ${item.originalPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartTableItems;
