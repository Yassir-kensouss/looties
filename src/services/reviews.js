import { auth } from "./instances";

export const addReview = data => {
  return auth({
    method: "POST",
    url: `/reviews/add`,
    data,
  });
};

export const fetchReviews = id => {
  return auth({
    method: "GET",
    url: `/reviews/fetch/${id}`,
  });
};
