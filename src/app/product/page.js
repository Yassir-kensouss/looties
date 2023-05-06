import React from "react";
import BreadCrumbs from "../components/ui-components/BreadCrumbs";
import ProductContent from "../components/product/ProductContent";

const crumbs = [
  { link: "/", label: "Home" },
  { link: "/products", label: "Products" },
  { link: "/product", label: "Product" },
];

const Product = () => {
  return (
    <main className="mx-auto gap-5 max-w-7xl p-6 lg:px-8">
      <BreadCrumbs crumbs={crumbs} />
      <ProductContent />
    </main>
  );
};

export default Product;
