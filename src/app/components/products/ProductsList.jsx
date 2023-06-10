"use client";
import React, { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import AppliedFilters from "./AppliedFilters";
import ProductsItems from "./ProductsItems";
import SortProduct from "./Sortproduct";
import MobileFilterDialog from "./MobileFilterDilogue";

const ProductsList = () => {
  const [isMobileDialogOpen, setMobileDialogOpen] = useState(false);
  const count = 39;
  const total = 20;

  const openMobileFilterDialog = () => {
    setMobileDialogOpen(true);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between w-full sticky top-10">
          <p className="text-sm">
            Showing <span className="font-semibold">{count}</span> results from
            total <span className="font-semibold">{total}</span>
          </p>
          <button
            onClick={openMobileFilterDialog}
            aria-label="open product filters"
            className="basic-btn lg:hidden flex"
          >
            <AdjustmentsHorizontalIcon width="100%" height={20} />
          </button>
          <div className="hidden lg:block ">
            <SortProduct />
          </div>
        </div>
        <AppliedFilters />
        <ProductsItems />
      </div>
      <MobileFilterDialog
        isMobileDialogOpen={isMobileDialogOpen}
        setMobileDialogOpen={setMobileDialogOpen}
      />
    </>
  );
};

export default ProductsList;
