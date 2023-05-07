import React from "react";
import BreadCrumbs from "../components/ui-components/BreadCrumbs";
import ProductContent from "../components/product/ProductContent";
import ProductMoreDetails from "../components/product/ProductMoreDetails";
import FeaturedProducts from "../components/home/FeaturedProducts";

const crumbs = [
  { link: "/", label: "Home" },
  { link: "/products", label: "Products" },
  { link: "/product", label: "Product" },
];

const Product = () => {
  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <BreadCrumbs crumbs={crumbs} />
      <ProductContent />
      <ProductMoreDetails />
      <div className="mb-8">
        <FeaturedProducts />
      </div>
    </main>
  );
};

export default Product;
