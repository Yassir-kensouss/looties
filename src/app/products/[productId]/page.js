"use client";
import React, { useContext, useState } from "react";
import FeaturedProducts from "@/app/components/home/FeaturedProducts";
import ProductContent from "@/app/components/product/ProductContent";
import ProductMoreDetails from "@/app/components/product/ProductMoreDetails";
import BreadCrumbs from "@/app/components/ui-components/BreadCrumbs";
import { useQuery } from "react-query";
import { fetchSingleProduct } from "@/services/products";
import { AppContext } from "@/app/layout";

const crumbs = [
  { link: "/", label: "Home" },
  { link: "/products", label: "Products" },
  { link: "/product", label: "Product" },
];

const fetchProduct = async productId => {
  const response = await fetchSingleProduct(productId);
  const data = await response.data.product;
  return data;
};

const Product = async ({ productId }) => {
  const product = await fetchProduct(productId);

  return (
    <>
      <BreadCrumbs crumbs={crumbs} />
      <ProductContent product={product} />
      <ProductMoreDetails product={product} />
      <div className="mb-8">
        <FeaturedProducts />
      </div>
    </>
  );
};

export default Product;
