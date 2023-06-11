"use client";
import { AppContext } from "@/app/layout";
import React, { useContext, useState } from "react";

const CategoryFilter = ({ categories }) => {
  const { filters, setFilters } = useContext(AppContext);

  const selectCategory = e => {
    const value = e.target.value;
    if (filters.category?.includes(value)) {
      const removeFilter = filters.category?.filter(el => el !== value);
      setFilters({
        ...filters,
        category: removeFilter,
      });
      return;
    }
    setFilters({
      ...filters,
      category: [...filters.category, value],
    });
  };

  return (
    <div className="mt-3">
      {categories.map(category => (
        <div
          key={category._id}
          className="flex items-center justify-between mb-2"
        >
          <div className="flex items-center">
            <label htmlFor={category.name} className="flex items-center gap-1">
              <input
                type="checkbox"
                name={category.name}
                id={category.name}
                className="checkbox checkbox-sm"
                onChange={selectCategory}
                value={category.name}
                checked={filters.category.includes(category.name)}
              />
              <span className="capitalize">{category.name}</span>
            </label>
          </div>
          <div className="w-6 h-6 text-xs font-medium flex items-center justify-center text-zinc-700 bg-zinc-100 border-zinc-200 border-2 rounded-lg">
            {category.linkedProduct}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
