import { AppContext } from "@/app/layout";
import React, { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const BrandsFilters = () => {
  const { filters, setFilters } = useContext(AppContext);

  const removeFilter = el => {
    const newFilters = filters.brand.filter(item => item !== el);

    setFilters({
      ...filters,
      brand: newFilters,
    });
  };

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        {filters.brand.length > 0
          ? filters.brand.map(el => (
              <div className="flex items-center gap-2 p-2 text-sm capitalize font-semibold text-zinc-600 border border-zinc-300 rounded-2xl w-fit">
                <span>{el}</span>
                <button
                  aria-label="remove applied filter"
                  className="hover:opacity-70 transition"
                  onClick={() => removeFilter(el)}
                >
                  <XMarkIcon width={17} height={17} />
                </button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default BrandsFilters;
