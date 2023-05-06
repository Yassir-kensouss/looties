import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import AppliedFilters from "./AppliedFilters";
import ProductsItems from "./ProductsItems";

const people = [
  { id: 1, name: "Date", unavailable: false },
  { id: 1, name: "Name", unavailable: false },
];

const ProductsList = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const count = 39;
  const total = 20;
  return (
    <div>
      <div className="flex items-start justify-between w-full">
        <p>
          Showing <span className="font-semibold">{count}</span> results from
          total <span className="font-semibold">{total}</span>
        </p>
        <div className="flex items-center gap-2">
          <span>Sort by</span>
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <div className="relative">
              <Listbox.Button className="relative min-w-fit w-36 cursor-pointer rounded-lg bg-white p-2 pl-3 pr-10 text-left border border-zinc-300 hover:opacity-80 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selectedPerson.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Listbox.Options className="z-10 absolute mt-1 w-full p-2 max-h-60 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map(person => (
                  <Listbox.Option
                    key={person.id}
                    value={person}
                    disabled={person.unavailable}
                    className="hover:bg-zinc-50 p-2 rounded-md cursor-pointer"
                  >
                    {person.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
      </div>
      <AppliedFilters />
      <ProductsItems />
    </div>
  );
};

export default ProductsList;
