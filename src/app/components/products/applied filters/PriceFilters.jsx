"use client";
import { AppContext } from "@/app/layout";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";

const PriceFilters = () => {
  const { filters, setFilters } = useContext(AppContext);

  const removeFilter = () => {
    setFilters({
      ...filters,
      price: {
        minPrice: 0,
        maxPrice: 0,
      },
    });
  };

  return (
    <div className="flex items-center gap-2 p-2 text-sm capitalize font-semibold text-zinc-600 border border-zinc-300 rounded-2xl w-fit">
      <span>
        {filters.price.minPrice} - {filters.price.maxPrice}
      </span>
      <button
        aria-label="remove applied filter"
        className="hover:opacity-70 transition"
        onClick={() => removeFilter()}
      >
        <XMarkIcon width={17} height={17} />
      </button>
    </div>
  );
};

export default PriceFilters;
