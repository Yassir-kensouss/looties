import React from "react";
import Collapse from "../ui-components/Collapse";
import CategoryFilter from "../category/CategoryFilter";

const LeftSideFilters = () => {
  return (
    <>
      <div className="w-72 lg:border-2 lg:rounded-lg lg:p-3">
        <Collapse label="Category">
          <CategoryFilter />
        </Collapse>
        <Collapse label="Brands" className="mt-2">
          expand
        </Collapse>
        <Collapse label="Price" className="mt-2">
          Price
        </Collapse>
        <Collapse label="Size" className="mt-2 border-b-0">
          Size
        </Collapse>
      </div>
    </>
  );
};

export default LeftSideFilters;
