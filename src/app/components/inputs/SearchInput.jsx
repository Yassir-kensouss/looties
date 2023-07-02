import { AppContext } from "@/app/layout";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const SearchInput = () => {
  const router = useRouter();

  const { filters, setFilters } = useContext(AppContext);

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      router.push(`/products?search=${e.target.value}`);
      setFilters({
        ...filters,
        search: e.target.value,
      });
    }
  };

  return (
    <div
      tabIndex="1"
      className="focus-within:outline outline-2 outline-offset-2 outline-zinc-200 flex items-center gap-4 bg-zinc-50 border-2 border-zinc-100 p-2 rounded-lg text-zinc-600 font-we"
    >
      <MagnifyingGlassIcon width={18} height={18} />
      <input
        onKeyDown={e => handleKeyPress(e)}
        type="text"
        placeholder="Search for a product"
        className="h-8 text-sm bg-transparent outline-none placeholder:pl-2"
      />
    </div>
  );
};

export default SearchInput;
