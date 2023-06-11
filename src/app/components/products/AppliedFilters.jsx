"use client";
import React, { useContext } from "react";
import CategoriesFilters from "./applied filters/CategoriesFilters";
import BrandsFilters from "./applied filters/BrandsFilters";
import PriceFilters from "./applied filters/PriceFilters";
import { AppContext } from "@/app/layout";
import SizesFilters from "./applied filters/SizesFilters";

const AppliedFilters = () => {
  const { filters, setFilters } = useContext(AppContext);
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <p className="text-zinc-800 text-medium">Applied Filters:</p>
      <div className="flex gap-2">
        <CategoriesFilters />
        <BrandsFilters />
        {filters.price.maxPrice > 0 ? <PriceFilters /> : null}
        <SizesFilters />
      </div>
    </div>
  );
};

export default AppliedFilters;
