import { AppContext } from "@/app/layout";
import React, { useContext } from "react";

const PaymentShippingDetails = () => {
  const { checkoutData, total } = useContext(AppContext);

  return (
    <div>
      <div className="pb-4 border-b">
        <ul>
          <li className="flex items-center justify-between mb-3">
            <div className="text-sm text-zinc-600">Subtotal</div>
            <div className="font-semibold text-gray-800 text-sm">
              ${total.total}
            </div>
          </li>
          <li className="flex items-center justify-between">
            <div className="text-sm text-zinc-600">Discount</div>
            <div className="font-semibold text-gray-800 text-sm">$0</div>
          </li>
        </ul>
      </div>
      <h4 className="text-gray-900 font-semibold mt-4 mb-3">Shipping:</h4>
      <div className="flex justify-between w-full items-start bg-zinc-50 p-2 rounded-md">
        <div>
          <h5 className="text-sm font-regular text-gray-800 mb-2">
            {checkoutData.shipping.name}
          </h5>
          <p className="text-xs text-gray-700">
            {checkoutData.shipping.description}
          </p>
        </div>
        <div className="text-gray-900">{checkoutData.shipping.price}</div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm font-medium text-zinc-700">Grand Total</div>
        <div className="font-semibold text-gray-800 text-medium">
          ${total.grandTotal}
        </div>
      </div>
    </div>
  );
};

export default PaymentShippingDetails;
