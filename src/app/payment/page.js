"use client";
import PaymentShippingDetails from "@/components/Payment/PaymentShippingDetails";
import PaymentForm from "@/components/Payment/paymentForm";
import { getBraintreeToken } from "@/services/payment";
import { isAuthenticated } from "@/utils/helpers";
import React from "react";

const _getBraintreeToken = async () => {
  const userData = isAuthenticated();
  const response = await getBraintreeToken(userData.user._id, userData.token);
  return response;
};

const Payment = async () => {
  const braintreeToken = await _getBraintreeToken();

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-8">
        <div className="w-full lg:w-4/6">
          <h4 className="text-md text-gray-700 font-regular">
            Choose way to pay
          </h4>
          <PaymentForm braintreeData={braintreeToken.data} />
        </div>
        <div className="w-full lg:w-2/5 border border-zinc-200 rounded-lg p-6">
          <PaymentShippingDetails />
        </div>
      </div>
    </div>
  );
};

export default Payment;
