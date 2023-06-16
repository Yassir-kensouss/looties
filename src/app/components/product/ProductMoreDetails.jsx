"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import { fetchReviews } from "@/services/reviews";
import { useQuery } from "react-query";

const ProductMoreDetails = ({ product }) => {
  const { isLoading, refetch, data } = useQuery(
    "fetch-product-reviews",
    async () => {
      const response = await fetchReviews(product._id);
      const data = await response.data.reviews;
      return data;
    },
    { enabled: false, refetchOnWindowFocus: false }
  );

  const handleTabSelect = index => {
    if (index === 1) {
      refetch();
    }
  };

  return (
    <section className="mt-8">
      <Tab.Group onChange={index => handleTabSelect(index)}>
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
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="py-4">
            <ProductDescription product={product} />
          </Tab.Panel>
          <Tab.Panel className="py-4">
            <ProductReviews reviews={data} isLoading={isLoading} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default ProductMoreDetails;
