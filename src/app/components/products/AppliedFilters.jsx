import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const AppliedFilters = () => {
  const appliedFilters = {
    categories: ["shoes", "jeans"],
    price: ["20", "100"],
    size: ["medium", "large"],
  };

  return (
    <div className="flex items-center gap-2">
      <p className="text-zinc-800 font-medium text-medium">Applied Filter:</p>
      {Object.keys(appliedFilters).map(appliedFilter => (
        <div className="flex items-center gap-2 p-2 text-sm capitalize font-semibold text-zinc-600 border border-zinc-300 rounded-2xl w-fit">
          <span>{appliedFilters[appliedFilter]}</span>
          <button
            aria-label="remove applied filter"
            className="hover:opacity-70 transition"
          >
            <XMarkIcon width={17} height={17} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AppliedFilters;
