import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ErrorMessage, Field } from "formik";
import React from "react";

const AuthPersonal = props => {
  const { isValid, values, setStep } = props;

  const nextStep = () => {
    setStep("address");
  };

  return (
    <>
      <label htmlFor="name" className="block text-sm">
        <span className="font-medium text-zinc-500">Full Name *</span>
        <Field
          id="name"
          type="name"
          name="name"
          placeholder="Enter your name"
          className="custom-input"
        />
      </label>
      <ErrorMessage
        className="text-red-500 text-sm mt-2"
        component="div"
        name="name"
      />
      <label htmlFor="email" className="mt-4 block text-sm">
        <span className="font-medium text-zinc-500">Email *</span>
        <Field
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="custom-input"
        />
      </label>
      <ErrorMessage
        className="text-red-500 text-sm mt-2"
        component="div"
        name="email"
      />
      <label htmlFor="password" className="mt-4 block text-sm">
        <span className="font-medium text-zinc-500">Password *</span>
        <Field
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className="custom-input"
        />
      </label>
      <div className="flex justify-end items-center">
        <button
          disabled={!values.name || !values.email}
          className={`flex items-center gap-2 p-3 hover:bg-zinc-700 active:bg-zinc-800 focus:ring-2 ring-offset-1 ring-zinc-700 bg-zinc-800 text-white text-sm rounded-lg mt-4 ${
            !values.name || !values.email
              ? "hover:bg-zinc-500 active:bg-zinc-500 bg-zinc-500"
              : ""
          }`}
          onClick={nextStep}
        >
          Next
          <ArrowRightIcon width={17} height={17} />
        </button>
      </div>
    </>
  );
};

export default AuthPersonal;
