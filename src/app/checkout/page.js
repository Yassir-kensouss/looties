"use client";
import React, { useContext, useMemo, useState } from "react";
import BreadCrumbs from "../components/ui-components/BreadCrumbs";
import CheckoutPreview from "../components/checkout/CheckoutPreview";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ShippingType from "../components/checkout/ShippingType";
import CustomCombobox from "../components/ui-components/Combobox";
import countryList from "react-select-country-list";
import CheckoutPersonalDetails from "../components/checkout/CheckoutPersonalDetails";
import { SHIPPING_PLANS } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { AppContext } from "../layout";

const crumbs = [
  { link: "/", label: "Home" },
  { link: "/cart", label: "Cart" },
  { link: "/checkout", label: "Checkout" },
];

const Checkout = () => {
  const router = useRouter();

  const [shipping, setShipping] = useState(SHIPPING_PLANS[0]);

  const { setCheckoutData, checkoutData } = useContext(AppContext);

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

  const initialValues = {
    country: country,
    full_name: "",
    email: "",
    email_confirmation: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    code_postal: "",
  };

  const CheckoutSchema = Yup.object().shape({
    full_name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email().required("Required"),
    email_confirmation: Yup.string().email().required("Required"),
    address: Yup.string()
      .min(2, "Address is too Short!")
      .max(1000, "Address is too Long!")
      .required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    code_postal: Yup.string().required("Code postal is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify({ ...values, shipping }, null, 2));
    setCheckoutData({
      ...checkoutData,
      ...values,
      shipping,
    });
    router.push("/payment");
    setSubmitting(false);
  };

  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <BreadCrumbs crumbs={crumbs} />
      <Formik
        initialValues={initialValues}
        validationSchema={CheckoutSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="flex flex-col lg:flex-row items-start gap-8 mt-8">
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
              <ShippingType shipping={shipping} setShipping={setShipping} />
            </div>
            <div className="w-full lg:w-2/5 border border-zinc-200 rounded-lg p-6">
              <CheckoutPreview />
              <button
                type="submit"
                className="bg-gray-800 rounded-lg text-white p-3 w-full mt-4 transition hover:bg-gray-700 active:bg-gray-900 focus:outline focus:outline-zinc-300"
              >
                Continue to payment
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </main>
  );
};

export default Checkout;
