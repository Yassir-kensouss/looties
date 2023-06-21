"use client";
import React, { useContext, useEffect } from "react";
import Collapse from "../ui-components/Collapse";
import CategoryFilter from "../../../components/CategoryFilter";
import BrandsFilter from "@/components/BrandsFilter";
import SizesFilter from "@/components/SizesFilter";
import PricesFilter from "@/components/PricesFilter";
import { useSearchParams } from "next/navigation";
import { AppContext } from "@/app/layout";

const LeftSideFilters = ({ categories, brands }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const { setFilters, filters } = useContext(AppContext);

  useEffect(() => {
    if (category) {
      setFilters({
        ...filters,
        category: [category],
      });
    }
  }, []);

  return (
    <>
      <div className="w-72 lg:border-2 lg:rounded-lg lg:p-2">
        {!category && categories && categories.length > 0 ? (
          <Collapse label="Category">
            <CategoryFilter categories={categories} />
          </Collapse>
        ) : null}
        {brands && brands.length > 0 ? (
          <Collapse
            label="Brands"
            className={
              !category && categories && categories.length > 0 ? "mt-2" : "mt-0"
            }
          >
            <BrandsFilter brands={brands} />
          </Collapse>
        ) : null}
        <Collapse label="Price" className="mt-2">
          <PricesFilter />
        </Collapse>
        <Collapse label="Size" className="mt-2 border-b-0">
          <SizesFilter />
        </Collapse>
      </div>
    </>
  );
};

export default LeftSideFilters;
