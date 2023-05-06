import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center gap-3">
      <button className="cursor-pointer transition hover:opacity-70 focus:outline focus:outline-zinc-200 flex items-center gap-1 p-2 capitalize font-medium text-gray-600 text-sm rounded-lg border-2 border-zinc-300">
        <ChevronLeftIcon width={15} height={15} />
        Previous
      </button>
      <span className="text-sm cursor-pointer transition hover:bg-zinc-50 w-10 h-10 grid items-center text-center font-medium text-gray-600 rounded-lg bg-zinc-100">
        1
      </span>
      <span className="text-sm cursor-pointer transition hover:bg-zinc-50 w-10 h-10 p-3 grid items-center text-center font-medium text-gray-600 rounded-lg">
        2
      </span>
      <span className="text-sm cursor-pointer transition hover:bg-zinc-50 w-10 h-10 p-3 grid items-center text-center font-medium text-gray-600 rounded-lg">
        3
      </span>
      <button className="cursor-pointer transition hover:opacity-70 focus:outline focus:outline-zinc-200 flex items-center gap-1 p-2 capitalize font-medium text-gray-600 text-sm rounded-lg border-2 border-zinc-300">
        Next
        <ChevronRightIcon width={15} height={15} />
      </button>
    </div>
  );
};

export default Pagination;
