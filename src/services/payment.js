import { auth } from "./instances";

export const getBraintreeToken = (userId, token) => {
  return auth({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
    url: `/braintree/getToken/${userId}`,
  });
};

export const paymentProcess = (userId, token, paymentData) => {
  return auth({
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `/braintree/purchase/${userId}`,
    data: JSON.stringify(paymentData),
  });
};
