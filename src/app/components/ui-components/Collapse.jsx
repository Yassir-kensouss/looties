"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Collapse = props => {
  const { label, children, className } = props;
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`bg-zinc-100 ${className} hover:bg-zinc-100 focus:outline focus:outline-zinc-200 transition text-zinc-600 p-3 rounded-lg flex items-center text-sm justify-between w-full`}
            >
              {label}
              <ChevronRightIcon
                width={15}
                height={15}
                aria-hidden="true"
                className={open ? "transition rotate-90 transform" : "svg"}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 pb-2">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Collapse;
