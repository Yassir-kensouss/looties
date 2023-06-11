"use client";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../ui-components/ProductCard";
import Pagination from "../Pagination";
import { fetchProductsByFilter } from "@/services/products";
import { AppContext } from "@/app/layout";
import { PRODUCTS_LIMIT } from "@/utils/constants";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import ProductsListSkeleton from "@/components/loading skeletons/ProductsListSkeleton";

const ProductsItems = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const getProducts = async (body, page) => {
    setLoading(true);
    const response = await fetchProductsByFilter(body, page);
    const data = await response.data.products;
    const productsTotal = await response.data.total;
    setProducts(data);
    setTotal(productsTotal);
    setLoading(false);
    const loop = productsTotal / PRODUCTS_LIMIT;
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

  if (!products || (products.length === 0 && !loading)) {
    return (
      <div className="mt-20 flex flex-col gap-1 items-center justify-center w-full">
        <ArchiveBoxXMarkIcon
          className="text-indigo-500"
          width={45}
          height={45}
        />
        <h3 className="text-xl font-medium">Product Unavailable</h3>
        <p className="text-gray-500 w-2/6 text-center">
          There are no products available in the selected category
        </p>
      </div>
    );
  }

  if (loading) {
    return <ProductsListSkeleton />;
  }

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
      {total > PRODUCTS_LIMIT ? (
        <div className="w-full flex justify-center mt-10">
          <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : null}
    </>
  );
};

export default ProductsItems;
