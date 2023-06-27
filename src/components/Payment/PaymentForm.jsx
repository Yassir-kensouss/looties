"use client";
import { paymentProcess } from "@/services/payment";
import { isAuthenticated } from "@/utils/helpers";
import React, { useContext, useEffect, useState } from "react";
import PaymentDropIn from "./PaymentDropIn";
import { createOrder } from "@/services/orders";
import { AppContext } from "@/app/layout";
import { useRouter } from "next/navigation";

const PaymentForm = ({ braintreeData }) => {
  const { checkoutData } = useContext(AppContext);

  const router = useRouter();

  const [data, setData] = useState({
    braintreeToken: null,
    error: null,
    instance: {},
  });
  const [orderLoading, setOrderLoading] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);

  useEffect(() => {
    setData({ ...data, braintreeToken: braintreeData.token });
  }, []);

  const makePayment = () => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    let totalPrice = 0;
    cartItems.map(item => {
      return (totalPrice += item.originalPrice * item.quantity);
    });

    const userId = isAuthenticated().user._id;
    const token = isAuthenticated().token;

    data.instance
      ?.requestPaymentMethod()
      .then(data => {
        setPurchaseLoading(true);
        paymentProcess(userId, token, {
          amount: parseFloat(totalPrice),
          paymentMethodNonce: data.nonce,
          products: cartItems,
        })
          .then(res => {
            setPurchaseLoading(false);
            const orderData = {
              products: cartItems,
              transaction_id: res.data.transaction.id,
              totalPrice: parseFloat(res.data.transaction.amount),
              address: {
                address: checkoutData.address,
                state: checkoutData.state,
                country: checkoutData.country.name,
                zip_code: checkoutData.code_postal,
                country_code: checkoutData.country.value,
              },
            };

            setOrderLoading(true);
            createOrder(userId, orderData)
              .then(res => {
                router.push("/");
                setOrderLoading(false);
              })
              .catch(err => {
                return;
              });
          })
          .catch(err => console.log("err payment", err));
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <PaymentDropIn data={data} />
      <div className="flex w-full justify-end">
        <button
          disabled={orderLoading || purchaseLoading}
          onClick={() => makePayment()}
          className={`${
            orderLoading || purchaseLoading
              ? "bg-gray-400 hover:bg-gray-400 active:bg-gray-400"
              : ""
          } flex gap-2 items-center text-center p-2 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800 focus:ring-2 ring-offset-2 ring-zinc-400 mt-4`}
        >
          Make Payment
          {orderLoading || purchaseLoading ? (
            <svg
              className="animate-spin -ml-1 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
