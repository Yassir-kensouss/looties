const signupValidation = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (!values.name) {
    errors.name = "Full name is required";
  } else if (!values.address) {
    errors.address = "Address is required";
  } else if (!values.city) {
    errors.city = "City is required";
  } else if (!values.postal_code) {
    errors.postal_code = "Postal code is required";
  }
  return errors;
};

export { signupValidation };
