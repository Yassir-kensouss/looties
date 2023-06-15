import { AUTH_TYPE } from "@/utils/constants";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const SignIn = props => {
  const { submit, isLoading = false, auth, setAuth } = props;

  const handleAuthType = () => {
    auth === AUTH_TYPE[0] ? setAuth(AUTH_TYPE[1]) : setAuth(AUTH_TYPE[0]);
  };

  return (
    <div>
      <h3 className="text-xl mb-8 tet-gray-900 font-semibold">Sign In</h3>
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
        onSubmit={submit}
      >
        {({ isValid }) => (
          <Form>
            <label htmlFor="email" className="block text-sm">
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
            <p className="text-sm mt-4 text-zinc-700 cursor-pointer hover:text-zinc-500 active:text-zinc-700">
              You don't have an account -{" "}
              <span className="font-semibold" onClick={handleAuthType}>
                Sign Up now
              </span>
            </p>
            <button
              disabled={!isValid || isLoading}
              className={`flex items-center gap-4 p-3 hover:bg-zinc-700 active:bg-zinc-800 focus:ring-2 ring-offset-1 ring-zinc-700 bg-zinc-800 text-white text-sm rounded-lg mt-4 ${
                !isValid || isLoading
                  ? "hover:bg-zinc-500 active:bg-zinc-500 bg-zinc-500"
                  : ""
              }`}
            >
              Sign In
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
