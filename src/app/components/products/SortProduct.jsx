"use client";
import React, { useContext } from "react";
import { AppContext } from "@/app/layout";

const list = [
  { label: "recent", code: "desc" },
  { label: "previous", code: "asc" },
];

const SortProduct = () => {
  const { filters, setFilters } = useContext(AppContext);
  const handleSortChange = sort => {
    setFilters({
      ...filters,
      sort,
    });
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Sort</span>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="text-sm px-3 py-2 bg-zinc-100 ring-offset-1 ring-zinc-200 focus:ring-2 outline-none rounded-md w-24 block text-center text-zinc-700 capitalize cursor-pointer m-1"
          >
            {filters.sort.label}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-32"
          >
            {list.map((el,index) => (
              <li
                key={index}
                className="capitalize hover:bg-zinc-100 text-zinc-800 px-2 py-1 cursor-pointer"
                onClick={() => handleSortChange(el)}
              >
                {el.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SortProduct;
