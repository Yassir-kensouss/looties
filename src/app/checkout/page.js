import React from "react";
import BreadCrumbs from "../components/ui-components/BreadCrumbs";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutPreview from "../components/checkout/CheckoutPreview";

const crumbs = [
  { link: "/", label: "Home" },
  { link: "/cart", label: "Cart" },
  { link: "/checkout", label: "Checkout" },
];

const Checkout = () => {
  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <BreadCrumbs crumbs={crumbs} />
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-8">
        <CheckoutForm />
        <CheckoutPreview />
      </div>
    </main>
  );
};

export default Checkout;
