"use client";
import React, { useContext, useState } from "react";
import Select from "../ui-components/Select";
import { AppContext } from "@/app/layout";

const sortValues = [
  { id: 1, name: "Recent", unavailable: false },
  { id: 1, name: "Old", unavailable: false },
];

const SortProduct = () => {
  const [selectedPerson, setSelectedPerson] = useState(sortValues[0]);
  const { filters, setFilters } = useContext(AppContext);

  // const handleSelect = e => {
  //   console.log("e.value", e.value);
  //   setSelectedPerson()
  //   setFilters({
  //     ...filters,
  //     sort: selectedPerson,
  //   });
  // };

  return (
    <>
      <div className="flex items-center gap-2">
        <span>Sort by</span>
        <Select
          selectedPerson={selectedPerson}
          setSelectedPerson={setSelectedPerson}
          values={sortValues}
        />
      </div>
    </>
  );
};

export default SortProduct;
