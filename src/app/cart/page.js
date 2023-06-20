"use client";
import React from "react";
import CartTable from "../components/cart/CartTable";
import CartTotalPrice from "../components/cart/CartTotalPrice";
import BreadCrumbs from "../components/ui-components/BreadCrumbs";
import { useSearchParams } from "next/navigation";
import { capitalize } from "lodash";

const Cart = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("path");

  const crumbs = [
    { link: "/", label: "Home" },
    {
      link: `${decodeURIComponent(path)}`,
      label: `${capitalize(decodeURIComponent(path).split("/")[1])}`,
    },
    { link: "/cart", label: "Cart" },
  ];

  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <div className="mb-8">
        <BreadCrumbs crumbs={crumbs} />
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <CartTable />
        <CartTotalPrice />
      </div>
    </main>
  );
};

export default Cart;
