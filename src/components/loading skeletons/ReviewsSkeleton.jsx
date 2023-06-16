import React from "react";
import Skeleton from "react-loading-skeleton";

const ReviewsSkeleton = ({ className }) => {
  return (
    <div
      className={`${className} grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-6`}
    >
      <Skeleton height="130px" width="100%" borderRadius="1rem" />
      <Skeleton height="130px" width="100%" borderRadius="1rem" />
      <Skeleton height="130px" width="100%" borderRadius="1rem" />
      <Skeleton height="130px" width="100%" borderRadius="1rem" />
    </div>
  );
};

export default ReviewsSkeleton;
