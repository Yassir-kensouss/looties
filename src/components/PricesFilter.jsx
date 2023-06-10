"use client";
import { AppContext } from "@/app/layout";
import React, { useContext } from "react";

const PricesFilter = () => {
  const { filters, setFilters } = useContext(AppContext);

  const minChange = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        minPrice: value,
      },
    });
  };

  const maxChange = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        maxPrice: value,
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
            value={filters.price.minPrice}
            name="minPrice"
            onChange={minChange}
          />
        </label>
        <label htmlFor="maxPrice" className="w-full">
          <div className="text-sm mb-1">Max</div>
          <input
            className="ring-offset-1 ring-zinc-200 focus:ring-2 outline-none w-full p-2 border border-2 border-gray-400 rounded-lg"
            id="maxPrice"
            value={filters.price.maxPrice}
            name="maxPrice"
            onChange={maxChange}
          />
        </label>
      </div>
    </div>
  );
};

export default PricesFilter;
