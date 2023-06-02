import React from "react";
import Skeleton from "react-loading-skeleton";

const CategoriesSkeleton = ({ className }) => {
  return (
    <div
      className={`${className} flex gap-4 justify-center flex-col lg:flex-row`}
    >
      <Skeleton width={300} height={300} borderRadius="1rem" />
      <Skeleton width={300} height={300} borderRadius="1rem" />
      <Skeleton width={300} height={300} borderRadius="1rem" />
      <Skeleton width={300} height={300} borderRadius="1rem" />
    </div>
  );
};

export default CategoriesSkeleton;
