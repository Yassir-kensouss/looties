"use client";
import React from "react";
import BreadCrumbs from "../components/ui-components/BreadCrumbs";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Collapse from "../components/ui-components/Collapse";
import CategoryFilter from "../components/category/CategoryFilter";
import ProductsList from "../components/products/ProductsList";
import CallToAction from "../components/home/CallToAction";
import Subscribe from "../components/home/Subscribe";

const crumbs = [
  { link: "/", label: "Home" },
  { link: "/products", label: "Products" },
];

const Products = () => {
  return (
    <main className="mx-auto gap-5 max-w-7xl p-6 lg:px-8">
      <BreadCrumbs crumbs={crumbs} />
      <div className="mt-8 flex items-start gap-4">
        <div className="w-72 border-2 rounded-lg p-3 sticky top-28">
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
        <section className="w-full">
          <ProductsList />
        </section>
      </div>
      <CallToAction />
      <Subscribe />
    </main>
  );
};

export default Products;
