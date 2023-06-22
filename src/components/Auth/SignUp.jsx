import { AUTH_TYPE } from "@/utils/constants";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import AuthPersonal from "./AuthPersonal";
import AuthAddress from "./AuthAddress";
import { signupValidation } from "@/utils/validations";

const SignUp = props => {
  const {
    setCountry,
    country,
    submit,
    isLoading,
    auth,
    setAuth,
    phone,
    setPhone,
  } = props;

  const [step, setStep] = useState("personal");

  return (
    <div className="h-full">
      <h3 className="text-xl mb-8 tet-gray-900 font-semibold">
        Create Account
      </h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={signupValidation}
        onSubmit={submit}
      >
        {({ isValid, values }) => (
          <Form>
            {step === "personal" ? (
              <AuthPersonal step={step} setStep={setStep} values={values} />
            ) : (
              <AuthAddress
                phone={phone}
                setPhone={setPhone}
                step={step}
                setStep={setStep}
                isValid={isValid}
                isLoading={isLoading}
                setCountry={setCountry}
                country={country}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
