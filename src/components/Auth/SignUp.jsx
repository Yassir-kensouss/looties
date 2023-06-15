import { AUTH_TYPE } from "@/utils/constants";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import AuthPersonal from "./AuthPersonal";
import AuthAddress from "./AuthAddress";
import Image from "next/image";

const SignUp = props => {
  const { submit, isLoading, auth, setAuth, phone, setPhone } = props;

  const [step, setStep] = useState("personal");

  const handleAuthType = () => {
    auth === AUTH_TYPE[0] ? setAuth(AUTH_TYPE[1]) : setAuth(AUTH_TYPE[0]);
  };

  return (
    <div className="h-full">
      <h3 className="text-xl mb-8 tet-gray-900 font-semibold">
        Create Account
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
        onSubmit={submit}
      >
        {({ isValid }) => (
          <Form>
            {step === "personal" ? (
              <AuthPersonal step={step} setStep={setStep} isValid={isValid} />
            ) : (
              <AuthAddress
                phone={phone}
                setPhone={setPhone}
                step={step}
                setStep={setStep}
                isValid={isValid}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
