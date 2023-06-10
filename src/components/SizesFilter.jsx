"use client";
import { AppContext } from "@/app/layout";
import { SIZES } from "@/utils/constants";
import React from "react";
import { useContext } from "react";

const SizesFilter = () => {
  const { filters, setFilters } = useContext(AppContext);

  const selectSize = e => {
    const value = e.target.value;
    setFilters({
      ...filters,
      size: [...filters.size, value],
    });
  };

  return (
    <div className="mt-3">
      {SIZES.map(size => (
        <div
          key={size.value}
          className="flex items-center justify-between mb-2"
        >
          <div className="flex items-center">
            <label htmlFor={size.value} className="flex items-center gap-1">
              <input
                type="checkbox"
                name={size.value}
                id={size.value}
                className="checkbox checkbox-sm"
                value={size.value}
                onChange={selectSize}
                checked={filters.size.includes(size.value)}
              />
              <span className="capitalize text-sm">{size.value}</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SizesFilter;
