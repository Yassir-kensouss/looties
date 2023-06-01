import { auth } from "./instances";

export const fetchCategories = () => {
  return auth({
    method: "GET",
    url: `/category/fetchAll?page=0&limit=10`,
  });
};
