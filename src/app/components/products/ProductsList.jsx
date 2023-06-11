"use client";
import React, { useContext, useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import AppliedFilters from "./AppliedFilters";
import ProductsItems from "./ProductsItems";
import MobileFilterDialog from "./MobileFilterDilogue";
import { PRODUCTS_LIMIT } from "@/utils/constants";
import Sort from "./Sort";
import { AppContext } from "@/app/layout";

const ProductsList = () => {
  const { filters } = useContext(AppContext);

  const [isMobileDialogOpen, setMobileDialogOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const openMobileFilterDialog = () => {
    setMobileDialogOpen(true);
  };

  const displayAppliedFilters =
    filters.category.length > 0 ||
    filters.brand.length > 0 ||
    filters.size.length > 0 ||
    filters.price.maxPrice > 0;

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between w-full sticky top-10">
          <p className="text-sm">
            Showing{" "}
            <span className="font-semibold">
              {PRODUCTS_LIMIT > total ? total : PRODUCTS_LIMIT}
            </span>{" "}
            results from total <span className="font-semibold">{total}</span>
          </p>
          <button
            onClick={openMobileFilterDialog}
            aria-label="open product filters"
            className="basic-btn lg:hidden flex"
          >
            <AdjustmentsHorizontalIcon width="100%" height={20} />
          </button>
          <div className="hidden lg:block ">
            <Sort />
          </div>
        </div>
        {displayAppliedFilters ? <AppliedFilters /> : null}
        <ProductsItems total={total} setTotal={setTotal} />
      </div>
      <MobileFilterDialog
        isMobileDialogOpen={isMobileDialogOpen}
        setMobileDialogOpen={setMobileDialogOpen}
      />
    </>
  );
};

export default ProductsList;
