"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import ProductDiscussion from "./ProductDiscussion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductMoreDetails = () => {
  return (
    <section className="mt-8">
      <Tab.Group>
        <Tab.List className="flex">
          <Tab
            className={({ selected }) => {
              return selected
                ? "flex items-center gap-2 justify-center flex-1 border-b-2 border-zinc-900 py-4 text-zinc-900 outline-0 font-semibold text-sm"
                : "flex items-center gap-2 justify-center flex-1 border-b-2 border-zinc-300 py-4 text-zinc-500 outline-0 font-semibold text-sm";
            }}
          >
            The Details
          </Tab>
          <Tab
            className={({ selected }) => {
              return selected
                ? "flex items-center gap-2 justify-center flex-1 border-b-2 border-zinc-900 py-4 text-zinc-900 outline-0 font-semibold text-sm"
                : "flex items-center gap-2 justify-center flex-1 border-b-2 border-zinc-300 py-4 text-zinc-500 outline-0 font-semibold text-sm";
            }}
          >
            Rating & Reviews
          </Tab>
          <Tab
            className={({ selected }) => {
              return selected
                ? "flex items-center gap-2 justify-center flex-1 border-b-2 border-zinc-900 py-4 text-zinc-900 outline-0 font-semibold text-sm"
                : "flex items-center gap-2 justify-center flex-1 border-b-2 border-zinc-300 py-4 text-zinc-500 outline-0 font-semibold text-sm";
            }}
          >
            Discussion
            <div className="w-5 h-5 text-xs font-semibold flex items-center justify-center text-zinc-700 bg-zinc-100 border-zinc-200 border-2 rounded-lg">
              4
            </div>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="py-4">Content 1</Tab.Panel>
          <Tab.Panel className="py-4">Content 2</Tab.Panel>
          <Tab.Panel className="py-4">
            <ProductDiscussion />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default ProductMoreDetails;
