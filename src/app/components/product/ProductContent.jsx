import React from "react";
import ProductSlideShow from "./ProductSlideShow";
import ProductDetails from "./ProductDetails";

const ProductContent = ({ product, isLoading }) => {
  return (
    <section className="flex flex-col lg:flex-row mt-8 gap-10">
      <ProductSlideShow product={product} isLoading={isLoading} />
      <ProductDetails product={product} />
    </section>
  );
};

export default ProductContent;
