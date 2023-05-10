"use client";
import Image from "next/image";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";

const CheckoutPreview = () => {
  return (
    <div className="w-full lg:w-2/5 border border-zinc-200 rounded-lg p-6">
      <h3 className="mb-3 text-base font-semibold text-gray-800">Your Order</h3>
      <div className="divide-y">
        <div className="flex items-start gap-4 pb-6">
          <div
            style={{ minWidth: "80px" }}
            className="h-20 w-20 rounded-lg relative"
          >
            <Image
              src="/assets/cats_4.jpg"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-zinc-600 text-sm w-48 text-ellipsis whitespace-nowrap overflow-hidden">
                Cahier Leather Dresser Franky
              </h2>
              <p className="text-base font-semibold text-gray-800">$2,500.00</p>
            </div>
            <p className="text-sm text-gray-600 my-1">Gray</p>
            <p className="text-sm text-gray-900">x1</p>
          </div>
        </div>
        <div className="pb-6">
          <h3 className="my-3 text-base font-semibold text-gray-800">
            Discount Code
          </h3>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <div className="flex gap-4 flex-center">
                <Field
                  id="discount_code"
                  type="text"
                  name="discount_code"
                  placeholder="Add discount code"
                  className="custom-input"
                />
                <button
                  style={{ padding: "8px 20px" }}
                  className="text-base font-medium transition hover:bg-zinc-50 active:bg-white focus:outline focus:outline-zinc-300 text-zinc-700 rounded-lg border-2 border-zinc-300"
                >
                  Apply
                </button>
              </div>
            </Form>
          </Formik>
          <p className="mt-3 text-sm">
            <span className="font-semibold text-gray-900">New customer? </span>
            <Link href="/signup" className="underline decoration-1">
              Sign up
            </Link>{" "}
            to get better offer
          </p>
        </div>
        <div className="py-5">
          <ul>
            <li className="flex items-center justify-between py-1">
              <div className="text-sm font-medium text-zinc-700">Subtotal</div>
              <div className="font-semibold text-gray-800 text-sm">
                $2,5000.00
              </div>
            </li>
            <li className="flex items-center justify-between py-1">
              <div className="text-sm font-medium text-zinc-700">Discount</div>
              <div className="font-semibold text-gray-800 text-sm">-$0</div>
            </li>
            <li className="flex items-center justify-between">
              <div className="text-sm font-medium text-zinc-700">
                Shipment cost
              </div>
              <div className="font-semibold text-gray-800 text-sm">$22.5</div>
            </li>
          </ul>
        </div>
        <div>
          <li className="flex items-center justify-between pt-3">
            <div className="text-base font-medium text-zinc-700">
              Grand Total
            </div>
            <div className="font-semibold text-gray-800 text-lg">$2,522.50</div>
          </li>
          <button className="bg-gray-800 rounded-lg text-white p-3 w-full mt-4 transition hover:bg-gray-700 active:bg-gray-900 focus:outline focus:outline-zinc-300">
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPreview;
