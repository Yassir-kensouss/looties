import { auth } from "./instances";

export const fetchHeroCarousal = () => {
  return auth({
    method: "GET",
    url: `/settings/carousals/hero/fetch`,
  });
};

export const fetchBrandsCarousal = () => {
  return auth({
    method: "GET",
    url: `/settings/carousals/brands/fetch`,
  });
};
