"use client";
import { AppContext } from "@/app/layout";
import AuthContainer from "@/components/Auth/AuthContainer";
import { isAuthenticated } from "@/utils/helpers";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const CartTotalPrice = ({ withBtn = true }) => {
  const { total, setTotal, cartItems } = useContext(AppContext);

  const [itemsLen, setItemsLen] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleAuthDialog = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    setItemsLen(cartItems.length);

    let totalPrices = 0;
    cartItems.map(el => {
      totalPrices = totalPrices + parseInt(el.price) * parseInt(el.quantity);
    });

    setTotal({
      ...total,
      total: totalPrices,
      grandTotal: totalPrices,
    });
  }, [cartItems]);

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
          {withBtn ? (
            <>
              {isAuthenticated() && isAuthenticated().user ? (
                <>
                  {itemsLen > 0 ? (
                    <Link
                      href="/checkout"
                      className="w-full block text-center transition hover:bg-gray-700 active:bg-gray-800 focus:outline focus:outline-zinc-400 p-2 bg-gray-800 rounded-lg font-medium text-white"
                    >
                      Checkout now
                    </Link>
                  ) : null}
                </>
              ) : (
                <>
                  {itemsLen > 0 ? (
                    <button
                      onClick={() => handleAuthDialog()}
                      className="w-full block text-center transition hover:bg-gray-700 active:bg-gray-800 focus:outline focus:outline-zinc-400 p-2 bg-gray-800 rounded-lg font-medium text-white"
                    >
                      Checkout now
                    </button>
                  ) : null}
                </>
              )}
            </>
          ) : null}
        </div>
      </div>
      <AuthContainer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default CartTotalPrice;
