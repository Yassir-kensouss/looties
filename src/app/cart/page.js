import React from "react";
import CartTable from "../components/cart/CartTable";
import CartTotalPrice from "../components/cart/CartTotalPrice";

const Cart = () => {
  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <CartTable />
        <CartTotalPrice />
      </div>
    </main>
  );
};

export default Cart;
