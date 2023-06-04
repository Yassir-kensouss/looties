"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartTotalPrice = () => {
  const [total, setTotal] = useState({
    total: 0,
    discount: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    let totalPrices = 0;
    cartItems.map(el => {
      totalPrices = totalPrices + el.price;
    });

    setTotal({
      ...total,
      total: totalPrices,
      grandTotal: totalPrices,
    });
  }, []);

  return (
    <div className="w-full lg:w-2/5">
      <div className="p-4 border border-zinc-300 rounded-lg divide-y ">
        <div className="pb-4">
          <ul>
            <li className="flex items-center justify-between mb-3">
              <div className="text-sm text-zinc-600">Subtotal</div>
              <div className="font-semibold text-gray-800 text-sm">
                ${total.total}
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-sm text-zinc-600">Discount</div>
              <div className="font-semibold text-gray-800 text-sm">$0</div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="flex items-center justify-between py-3">
              <div className="text-sm font-medium text-zinc-700">
                Grand Total
              </div>
              <div className="font-semibold text-gray-800 text-medium">
                ${total.grandTotal}
              </div>
            </li>
          </ul>
          <Link
            href="/checkout"
            className="w-full block text-center transition hover:bg-gray-700 active:bg-gray-800 focus:outline focus:outline-zinc-400 p-2 bg-gray-800 rounded-lg font-medium text-white"
          >
            Checkout now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPrice;
