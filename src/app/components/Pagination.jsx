import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const previous = () => {
    if (currentPage === 0) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  const next = () => {
    if (currentPage === pages.length - 1) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={previous}
        disabled={currentPage === 0}
        className={`${
          currentPage === 0 ? "opacity-70 pointer-events-none" : ""
        } cursor-pointer transition hover:opacity-70 focus:outline focus:outline-zinc-200 flex items-center gap-1 p-2 capitalize font-medium text-gray-600 text-sm rounded-lg border-2 border-zinc-300`}
      >
        <ChevronLeftIcon width={15} height={15} />
        Previous
      </button>
      {pages.map(page => (
        <span
          onClick={() => setCurrentPage(page - 1)}
          className={`text-sm cursor-pointer transition hover:bg-zinc-50 w-10 h-10 grid items-center text-center font-medium text-gray-600 rounded-lg ${
            currentPage === page - 1
              ? "bg-zinc-600 text-white hover:bg-zinc-500"
              : "bg-zinc-100"
          } `}
        >
          {page}
        </span>
      ))}
      <button
        onClick={next}
        disabled={currentPage === pages.length - 1}
        className={`${
          currentPage === pages.length - 1
            ? "opacity-70 pointer-events-none"
            : ""
        } cursor-pointer transition hover:opacity-70 focus:outline focus:outline-zinc-200 flex items-center gap-1 p-2 capitalize font-medium text-gray-600 text-sm rounded-lg border-2 border-zinc-300`}
      >
        Next
        <ChevronRightIcon width={15} height={15} />
      </button>
    </div>
  );
};

export default Pagination;
