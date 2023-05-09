import { Formik } from "formik";
import Image from "next/image";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
        <div>
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
              <div className="flex">
                <Field
                  id="full_name"
                  type="full_name"
                  name="full_name"
                  placeholder="Add discount code"
                  className="custom-input"
                />
                <button>Apply</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPreview;
