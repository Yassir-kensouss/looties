"use client";
import { AppContext } from "@/app/layout";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useContext, useState } from "react";

const PricesFilter = () => {
  const { filters, setFilters } = useContext(AppContext);
  const [min, setMin] = useState(filters.price.minPrice);
  const [max, setMax] = useState(filters.price.maxPrice);

  const minChange = e => {
    const value = e.target.value;
    setMin(value);
  };

  const maxChange = e => {
    const value = e.target.value;
    setMax(value);
  };

  const applyPriceRangeFilter = () => {
    setFilters({
      ...filters,
      price: {
        maxPrice: max,
        minPrice: min,
      },
    });
  };

  return (
    <div className="w-full py-3">
      <div className="w-full flex gap-4 items-center justify-center">
        <label htmlFor="minPrice" className="w-full">
          <div className="text-sm mb-1">Min</div>
          <input
            className="ring-offset-1 ring-zinc-200 focus:ring-2 outline-none w-full p-2 border border-2 border-gray-400 rounded-lg"
            id="minPrice"
            value={min}
            name="minPrice"
            onChange={minChange}
          />
        </label>
        <label htmlFor="maxPrice" className="w-full">
          <div className="text-sm mb-1">Max</div>
          <input
            className="ring-offset-1 ring-zinc-200 focus:ring-2 outline-none w-full p-2 border border-2 border-gray-400 rounded-lg"
            id="maxPrice"
            value={max}
            name="maxPrice"
            onChange={maxChange}
          />
        </label>
        <button
          onClick={applyPriceRangeFilter}
          className="hover:bg-gray-700 active:bg-gray-800 ring-offset-1 ring-zinc-200 focus:ring-2 outline-none p-3 mt-6 bg-gray-800 rounded-lg text-white"
        >
          <ArrowRightIcon width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default PricesFilter;
