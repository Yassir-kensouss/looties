import { AppContext } from "@/app/layout";
import React, { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SizesFilters = () => {
  const { filters, setFilters } = useContext(AppContext);

  const removeFilter = el => {
    const newFilters = filters.size.filter(item => item !== el);

    setFilters({
      ...filters,
      size: newFilters,
    });
  };

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap">
        {filters.size.length > 0
          ? filters.size.map((el, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 text-sm capitalize font-semibold text-zinc-600 border border-zinc-300 rounded-2xl w-fit"
              >
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

export default SizesFilters;
