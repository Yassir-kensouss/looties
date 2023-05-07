import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Select from "../ui-components/Select";

const people = [
  { id: 1, name: "Date", unavailable: false },
  { id: 1, name: "Name", unavailable: false },
];

const SortProduct = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <>
      <div className="flex items-center gap-2">
        <span>Sort by</span>
        <Select
          selectedPerson={selectedPerson}
          setSelectedPerson={setSelectedPerson}
          values={people}
        />
      </div>
    </>
  );
};

export default SortProduct;
