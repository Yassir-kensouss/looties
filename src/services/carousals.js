import { auth } from "./instances";

export const fetchHeroCarousal = () => {
  return auth({
    method: "GET",
    url: `/settings/carousals/hero/fetch`,
  });
};

export const fetchBrands = () => {
  return auth({
    method: "GET",
    url: `/settings/carousals/brands/fetch`,
  });
};
