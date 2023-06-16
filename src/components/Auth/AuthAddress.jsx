import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AuthAddress = props => {
  const { isLoading, setStep, isValid, phone, setPhone } = props;

  const prevStep = () => {
    setStep("personal");
  };

  return (
    <div className="pb-14">
      <label htmlFor="address" className="block text-sm">
        <span className="font-medium text-zinc-500">
          Street name and house number
        </span>
        <Field
          id="address"
          type="address"
          name="address"
          placeholder="Enter your full address"
          className="custom-input"
        />
      </label>
      <ErrorMessage
        className="text-red-500 text-sm mt-2"
        component="div"
        name="address"
      />
      <label htmlFor="city" className="mt-4 block text-sm">
        <span className="font-medium text-zinc-500">City</span>
        <Field
          id="city"
          type="text"
          name="city"
          placeholder="Add your living city"
          className="custom-input"
        />
      </label>
      <ErrorMessage
        className="text-red-500 text-sm mt-2"
        component="div"
        name="city"
      />
      <label htmlFor="state" className="mt-4 block text-sm">
        <span className="font-medium text-zinc-500">State</span>
        <Field
          id="state"
          type="text"
          name="state"
          placeholder="Add your living state"
          className="custom-input"
        />
      </label>
      <label htmlFor="postal_code" className="mt-4 block text-sm">
        <span className="font-medium text-zinc-500">Postal Code</span>
        <Field
          id="postal_code"
          type="text"
          name="postal_code"
          placeholder="Postal code"
          className="custom-input"
        />
      </label>
      <ErrorMessage
        className="text-red-500 text-sm mt-2"
        component="div"
        name="postal_code"
      />
      <label htmlFor="postal_code" className="mt-4 block text-sm">
        <span className="mb-2 block font-medium text-zinc-500">Phone:</span>
        <PhoneInput
          className="user-phone-input"
          country={"us"}
          value={phone}
          onChange={phone => setPhone(phone)}
        />
      </label>

      <div className="flex justify-between">
        <button
          disabled={!isValid}
          className={`flex items-center gap-2 p-3 hover:bg-zinc-700 active:bg-zinc-800 focus:ring-2 ring-offset-1 ring-zinc-700 bg-zinc-800 text-white text-sm rounded-lg mt-4 ${
            !isValid ? "hover:bg-zinc-500 active:bg-zinc-500 bg-zinc-500" : ""
          }`}
          onClick={prevStep}
        >
          <ArrowLeftIcon width={17} height={17} />
          Back
        </button>
        <button
          type="submit"
          disabled={!isValid}
          className={`flex items-center gap-2 p-3 hover:bg-zinc-700 active:bg-zinc-800 focus:ring-2 ring-offset-1 ring-zinc-700 bg-zinc-800 text-white text-sm rounded-lg mt-4 ${
            !isValid ? "hover:bg-zinc-500 active:bg-zinc-500 bg-zinc-500" : ""
          }`}
        >
          Create Account
          {isLoading ? (
            <svg
              className="animate-spin -ml-1 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default AuthAddress;
