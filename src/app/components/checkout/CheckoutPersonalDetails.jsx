import React from "react";
import { Field, ErrorMessage } from "formik";

const CheckoutPersonalDetails = () => {
  return (
    <>
      <label htmlFor="full_name" className="mt-6 block text-sm">
        <span className="font-medium text-zinc-500">Full name *</span>
        <Field
          id="full_name"
          type="full_name"
          name="full_name"
          placeholder="Enter your name"
          className="custom-input"
        />
        <ErrorMessage
          className="text-red-500 text-sm mt-1"
          component="div"
          name="full_name"
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
          <ErrorMessage
            className="text-red-500 text-sm mt-1"
            component="div"
            name="email"
          />
        </label>
        <label htmlFor="email_confirmation" className="flex-1 text-sm">
          <span className="font-medium text-zinc-500">
            Email confirmation *
          </span>
          <Field
            id="email_confirmation"
            type="email_confirmation"
            name="email_confirmation"
            placeholder="Repeat your email"
            className="custom-input"
          />
          <ErrorMessage
            className="text-red-500 text-sm mt-1"
            component="div"
            name="email_confirmation"
          />
        </label>
      </div>
      <label htmlFor="phone" className="mt-6 block text-sm">
        <span className="font-medium text-zinc-500">Phone number *</span>
        <Field
          id="phone"
          type="text"
          name="phone"
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
        <ErrorMessage
          className="text-red-500 text-sm mt-1"
          component="div"
          name="address"
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
          <ErrorMessage
            className="text-red-500 text-sm mt-1"
            component="div"
            name="city"
          />
        </label>
        <label htmlFor="state" className="flex-1 text-sm">
          <span className="font-medium text-zinc-500">State *</span>
          <Field
            id="state"
            type="text"
            name="state"
            placeholder="Enter your state"
            className="custom-input"
          />
          <ErrorMessage
            className="text-red-500 text-sm mt-1"
            component="div"
            name="state"
          />
        </label>
      </div>
      <label htmlFor="code_postal" className="block mt-6 text-sm">
        <span className="font-medium text-zinc-500">Code postal *</span>
        <Field
          id="code_postal"
          type="text"
          name="code_postal"
          placeholder="Enter your code postal"
          className="custom-input"
        />
        <ErrorMessage
          className="text-red-500 text-sm mt-1"
          component="div"
          name="code_postal"
        />
      </label>
    </>
  );
};

export default CheckoutPersonalDetails;
