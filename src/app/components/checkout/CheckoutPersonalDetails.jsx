import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CheckoutPersonalDetails = () => {
  return (
    <>
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
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="full_name" className="mt-6 block text-sm">
              <span className="font-medium text-zinc-500">Full name *</span>
              <Field
                id="full_name"
                type="full_name"
                name="full_name"
                placeholder="Enter your name"
                className="custom-input"
              />
            </label>
            <div className="flex flex-col lg:flex-row gap-5 mt-6">
              <label htmlFor="full_name" className="flex-1 text-sm">
                <span className="font-medium text-zinc-500">Email *</span>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="custom-input"
                />
              </label>
              <label htmlFor="full_name" className="flex-1 text-sm">
                <span className="font-medium text-zinc-500">
                  Email confirmation *
                </span>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Repeat your email"
                  className="custom-input"
                />
              </label>
            </div>
            <label htmlFor="phone_number" className="mt-6 block text-sm">
              <span className="font-medium text-zinc-500">Phone number *</span>
              <Field
                id="phone_number"
                type="text"
                name="phone_number"
                placeholder="Enter your phone number"
                className="custom-input"
              />
            </label>
            <label htmlFor="address" className="mt-6 block text-sm">
              <span className="font-medium text-zinc-500">
                Street name and house number *
              </span>
              <Field
                id="address"
                type="text"
                name="address"
                placeholder="Enter your street and house number"
                className="custom-input"
              />
            </label>
            <div className="flex flex-col lg:flex-row gap-5 mt-6">
              <label htmlFor="city" className="flex-1 text-sm">
                <span className="font-medium text-zinc-500">City *</span>
                <Field
                  id="city"
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  className="custom-input"
                />
              </label>
              <label htmlFor="region" className="flex-1 text-sm">
                <span className="font-medium text-zinc-500">Region *</span>
                <Field
                  id="region"
                  type="text"
                  name="region"
                  placeholder="Enter your region"
                  className="custom-input"
                />
              </label>
            </div>
            <label htmlFor="zipcode" className="block mt-6 text-sm">
              <span className="font-medium text-zinc-500">Code postal *</span>
              <Field
                id="zipcode"
                type="text"
                name="zipcode"
                placeholder="Enter your code postal"
                className="custom-input"
              />
            </label>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutPersonalDetails;
