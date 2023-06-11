import { PRODUCTS_LIMIT } from "@/utils/constants";
import { auth } from "./instances";

export const fetchProductsByFilter = (body, page) => {
  return auth({
    method: "POST",
    url: `/product/products/all?page=${page}&limit=${PRODUCTS_LIMIT}`,
    data: body,
  });
};
