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
