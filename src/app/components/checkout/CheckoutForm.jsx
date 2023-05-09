"use client";
import React, { useMemo, useState } from "react";
import Select from "../ui-components/Select";
import countryList from "react-select-country-list";
import Combobox from "../ui-components/Combobox";
import CustomCombobox from "../ui-components/Combobox";
import CheckoutPersonalDetails from "./CheckoutPersonalDetails";
import ShippingType from "./ShippingType";

const CheckoutForm = () => {
  const countries = useMemo(
    () =>
      countryList()
        .getData()
        .map((country, index) => {
          return {
            ...country,
            name: country.label,
            unavailable: false,
            index: index,
          };
        }),
    []
  );
  const [country, setCountry] = useState(countries[0]);

  return (
    <div className="w-full lg:w-4/6">
      <div className="border border-zinc-200 rounded-lg p-6 divide-y">
        <div className="pb-6">
          <h3 className="mb-3 text-base font-semibold text-gray-800">
            Select shipping country
          </h3>
          <CustomCombobox
            options={countries}
            setSelected={setCountry}
            selected={country}
          />
        </div>
        <div className="pt-3">
          <h3 className="my-3 text-base font-semibold text-gray-800">
            Shipping address
          </h3>
          <CheckoutPersonalDetails />
        </div>
      </div>
      <ShippingType />
    </div>
  );
};

export default CheckoutForm;
