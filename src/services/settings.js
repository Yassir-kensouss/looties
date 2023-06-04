import { auth } from "./instances";

export const fetchGeneralSettings = () => {
  return auth({
    method: "GET",
    url: `settings/general`,
  });
};
