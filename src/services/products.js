import { auth } from "./instances";

export const fetchProductsByFilter = (body, page) => {
  return auth({
    method: "POST",
    url: `/product/products/all?page=${page}&limit=${1}`,
    data: body,
  });
};
