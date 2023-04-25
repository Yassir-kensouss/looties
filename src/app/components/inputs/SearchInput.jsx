import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-4 bg-zinc-50 border-2 border-zinc-100 p-2 rounded-lg text-zinc-600 font-we">
      <MagnifyingGlassIcon width={18} height={18} />
      <input
        type="text"
        placeholder="Search for a product"
        className="h-8 text-sm bg-transparent"
      />
    </div>
  );
};

export default SearchInput;
