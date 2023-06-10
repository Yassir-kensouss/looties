"use client";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ui-components/ProductCard";
import Pagination from "../Pagination";
import { fetchProductsByFilter } from "@/services/products";
import { AppContext } from "@/app/layout";

const ProductsItems = () => {
  const [products, setProducts] = useState([]);
  // const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getProducts = async (body, page) => {
    const response = await fetchProductsByFilter(body, page);
    const data = await response.data.products;
    const productsTotal = await response.data.total;
    setProducts(data);
    const loop = productsTotal / 1;
    const p = [];
    for (let i = 1; i <= loop; i++) {
      p.push(i);
    }
    setPages(p);
  };

  const { filters } = useContext(AppContext);

  useEffect(() => {
    getProducts(filters, currentPage);
  }, [filters, currentPage]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-11 mt-6">
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            photo={product.photos[0]?.url}
            preview={product.photos[1]?.url}
            title={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            width="270px"
            height="300px"
            nameSize="text-md"
            priceSize="text-md"
            oldPriceSize="text-sm"
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-10">
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default ProductsItems;
