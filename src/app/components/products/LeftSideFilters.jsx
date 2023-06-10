import React from "react";
import Collapse from "../ui-components/Collapse";
import CategoryFilter from "../../../components/CategoryFilter";
import BrandsFilter from "@/components/BrandsFilter";
import SizesFilter from "@/components/SizesFilter";
import PricesFilter from "@/components/PricesFilter";

const LeftSideFilters = ({ categories, brands }) => {
  return (
    <>
      <div className="w-72 lg:border-2 lg:rounded-lg lg:p-2">
        <Collapse label="Category">
          <CategoryFilter categories={categories} />
        </Collapse>
        <Collapse label="Brands" className="mt-2">
          <BrandsFilter brands={brands} />
        </Collapse>
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
