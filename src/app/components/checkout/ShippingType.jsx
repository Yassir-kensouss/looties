"use client";
import { useContext, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { SHIPPING_PLANS } from "@/utils/constants";
import { AppContext } from "@/app/layout";

const ShippingType = ({ shipping, setShipping }) => {
  const { total, setTotal, setCheckoutData, checkoutData } =
    useContext(AppContext);

  const handleShippingPlan = data => {
    setShipping(data);
    setTotal({
      ...total,
      grandTotal: total.total + data.priceVal,
    });

    setCheckoutData({
      ...checkoutData,
      shipping: data,
    });
  };

  return (
    <div className="w-full border border-zinc-200 rounded-lg p-6 mt-4">
      <h3 className="mb-3 text-base font-semibold text-gray-800">
        Shipping method
      </h3>
      <div>
        <RadioGroup
          value={shipping}
          onChange={data => handleShippingPlan(data)}
        >
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {SHIPPING_PLANS.map(plan => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-indigo-300"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-indigo-900 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 border border-zinc-300 focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span
                              className={`font-semibold text-gray-800 ${
                                checked ? "text-white" : "text-gray-800"
                              }`}
                            >
                              {plan.price}
                            </span>{" "}
                            <span aria-hidden="true">&middot;</span>{" "}
                            <span>{plan.description}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default ShippingType;

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
