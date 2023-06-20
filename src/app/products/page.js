import React from "react";
import BreadCrumbs from "../components/ui-components/BreadCrumbs";
import ProductsList from "../components/products/ProductsList";
import LeftSideFilters from "../components/products/LeftSideFilters";
import { fetchCategories } from "@/services/categories";
import { fetchBrands } from "@/services/carousals";

const crumbs = [
  { link: "/", label: "Home" },
  { link: "/products", label: "Products" },
];

const getCategories = async () => {
  const response = await fetchCategories();
  const data = await response.data.categories;

  return data;
};

const getBrands = async () => {
  const response = await fetchBrands();
  const data = await response.data.brands;

  return data;
};

const Products = async () => {
  // const products = await getProducts();
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <>
      <BreadCrumbs crumbs={crumbs} />
      <div className="mt-8 flex items-start gap-8">
        <div className="hidden lg:block sticky top-28">
          <LeftSideFilters categories={categories} brands={brands} />
        </div>
        <section className="w-full">
          <ProductsList categories={categories} brands={brands} />
        </section>
      </div>
    </>
  );
};

export default Products;
