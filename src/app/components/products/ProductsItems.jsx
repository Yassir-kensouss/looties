import React from "react";
import ProductCard from "../ui-components/ProductCard";
import Pagination from "../Pagination";

const ProductsItems = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <ProductCard
          photo="/assets/prod_5.jpg"
          preview="/assets/prod_4.jpg"
          title="Summer Vibe T-shirt"
          price="40"
          oldPrice="67"
        />
        <ProductCard
          photo="/assets/prod_6.jpg"
          preview="/assets/prod_4.jpg"
          title="Summer Vibe T-shirt"
          price="40"
          oldPrice="67"
        />
        <ProductCard
          photo="/assets/prod_4.jpg"
          preview="/assets/prod_4.jpg"
          title="Summer Vibe T-shirt"
          price="40"
          oldPrice="67"
        />
        <ProductCard
          photo="/assets/prod_3.jpg"
          preview="/assets/prod_4.jpg"
          title="Summer Vibe T-shirt"
          price="40"
          oldPrice="67"
        />
        <ProductCard
          photo="/assets/prod_1.jpg"
          preview="/assets/prod_4.jpg"
          title="Summer Vibe T-shirt"
          price="40"
          oldPrice="67"
        />
        <ProductCard
          photo="/assets/prod_3.jpg"
          preview="/assets/prod_4.jpg"
          title="Summer Vibe T-shirt"
          price="40"
          oldPrice="67"
        />
      </div>
      <div className="w-full flex justify-center mt-10">
        <Pagination />
      </div>
    </>
  );
};

export default ProductsItems;
