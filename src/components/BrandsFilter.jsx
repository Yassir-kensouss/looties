"use client";
import { AppContext } from "@/app/layout";
import React, { useContext } from "react";

const BrandsFilter = ({ brands }) => {
  const { filters, setFilters } = useContext(AppContext);

  const selectBrand = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      brand: [...filters.brand, value],
    });
  };

  return (
    <div className="mt-3">
      {brands.map(brand => (
        <div key={brand._id} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <label
              htmlFor={brand.brandName}
              className="flex items-center gap-1"
            >
              <input
                type="checkbox"
                name={brand.brandName}
                id={brand.brandName}
                className="checkbox checkbox-sm"
                value={brand.brandName}
                onChange={selectBrand}
                checked={filters.brand.includes(brand.brandName)}
              />
              <span className="capitalize">{brand.brandName}</span>
            </label>
          </div>
          <div className="w-6 h-6 text-xs font-medium flex items-center justify-center text-zinc-700 bg-zinc-100 border-zinc-200 border-2 rounded-lg">
            0
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandsFilter;
