import { auth } from "./instances";

export const signin = data => {
  return auth({
    method: "POST",
    url: `/signin`,
    data,
  });
};

export const signup = data => {
  return auth({
    method: "POST",
    url: `/signup`,
    data,
  });
};
