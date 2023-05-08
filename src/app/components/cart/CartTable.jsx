import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const CartTable = () => {
  return (
    <div className="w-full lg:w-4/6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">Cart</h2>
        <button className="flex items-center gap-2 font-medium p-2 rounded-lg transition text-sm active:bg-zinc-100 focus:outline focus:outline-zinc-100 hover:bg-zinc-50">
          <TrashIcon width={15} height={15} />
          Remove
        </button>
      </div>
      <div className="mt-8" role="table">
        <div
          role="table row"
          className="flex items-center gap-4 py-4 border-b-2 border-b-zinc-100"
        >
          <div
            role="table head"
            style={{ width: "5%" }}
            className="flex items-center"
          >
            <input type="checkbox" className="border-2 checkbox checkbox-xs" />
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
        <div className="flex items-center gap-4 py-4 border-b-2 border-b-zinc-100">
          <div
            role="table head"
            style={{ width: "5%" }}
            className="flex items-center"
          >
            <input type="checkbox" className="border-2 checkbox checkbox-xs" />
          </div>
          <div role="table head" style={{ width: "65%" }}>
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 relative">
                <Image src="/assets/prod_3.jpg" fill className="rounded-lg" />
              </div>
              <div>
                <h5 className="text-md mb-1 text-gray-800 font-medium">
                  Grisqui Suit{" "}
                </h5>
                <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                  <span>Green</span> |<span>M</span>
                </div>
              </div>
            </div>
          </div>
          <div role="table head" style={{ width: "15%" }}>
            <p className="text-sm text-zinc-600 font-semibold">3</p>
          </div>
          <div role="table head" style={{ width: "15%" }}>
            <p className="text-sm text-zinc-600 font-semibold">$250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
