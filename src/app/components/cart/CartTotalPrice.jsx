import React from "react";

const CartTotalPrice = () => {
  return (
    <div className="w-full lg:w-2/5">
      <div className="p-4 border border-zinc-300 rounded-lg divide-y ">
        <div className="pb-4">
          <ul>
            <li className="flex items-center justify-between mb-3">
              <div className="text-sm text-zinc-600">Subtotal</div>
              <div className="font-semibold text-gray-800 text-sm">
                $2,5000.00
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
                $2,5000.00
              </div>
            </li>
          </ul>
          <button className="w-full transition hover:bg-gray-700 active:bg-gray-800 focus:outline focus:outline-zinc-400 p-2 bg-gray-800 rounded-lg font-medium text-white">
            Checkout now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPrice;
