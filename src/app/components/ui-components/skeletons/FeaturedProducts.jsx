import React from "react";
import Skeleton from "react-loading-skeleton";

const FeaturedProductsSkeleton = () => {
  return (
    <div className="flex gap-2 justify-between">
      <Skeleton width={350} height={450} borderRadius="1rem" />
      <Skeleton width={350} height={450} borderRadius="1rem" />
      <Skeleton width={350} height={450} borderRadius="1rem" />
    </div>
  );
};

export default FeaturedProductsSkeleton;
