import { isAuthenticated } from "@/utils/helpers";
import { auth } from "./instances";

const { token } = isAuthenticated();

export const createOrder = (userId, orderData) => {
  return auth({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    url: `orders/create/${userId}`,
    data: orderData,
  });
};
