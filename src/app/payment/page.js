"use client";
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

  console.log("braintreeToken", braintreeToken);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-8">
        <div className="w-full lg:w-4/6">payment form</div>
        <div className="w-full lg:w-2/5 border border-zinc-200 rounded-lg p-6">
          total and shipping method
        </div>
      </div>
    </div>
  );
};

export default Payment;
