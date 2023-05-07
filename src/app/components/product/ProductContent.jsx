import React from "react";
import ProductSlideShow from "./ProductSlideShow";
import ProductDetails from "./ProductDetails";

const ProductContent = () => {
  return (
    <section className="flex mt-8 gap-10">
      <ProductSlideShow />
      <ProductDetails />
    </section>
  );
};

export default ProductContent;
