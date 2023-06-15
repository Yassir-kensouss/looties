import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Field } from "formik";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AuthAddress = props => {
  const { step, setStep, isValid, phone, setPhone } = props;

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
      <label htmlFor="city" className="mt-4 block text-sm">
        <span className="font-medium text-zinc-500">City</span>
        <Field
          id="city"
          type="text"
          name="city"
          placeholder="Add your city"
          className="custom-input"
        />
      </label>
      <label htmlFor="region" className="mt-4 block text-sm">
        <span className="font-medium text-zinc-500">Region</span>
        <Field
          id="region"
          type="text"
          name="region"
          placeholder="Add your region"
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
        </button>
      </div>
    </div>
  );
};

export default AuthAddress;
