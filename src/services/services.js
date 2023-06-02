import { auth } from "./instances";

export const fetchProducts = () => {
  return auth({
    method: "GET",
    url: `/product?page=0&limit=9`,
  });
};
