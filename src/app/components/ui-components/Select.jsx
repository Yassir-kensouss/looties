"use client";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const Select = ({ selectedPerson, setSelectedPerson, values }) => {
  return (
    <>
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
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-50 absolute mt-1 w-full p-2 max-h-60 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {values.map(person => (
                <Listbox.Option
                  key={person.name}
                  value={person}
                  disabled={person.unavailable}
                  className="hover:bg-zinc-50 z-50 p-2 rounded-md cursor-pointer"
                >
                  {person.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default Select;
