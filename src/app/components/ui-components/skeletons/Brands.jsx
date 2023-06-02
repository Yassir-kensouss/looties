import React from "react";
import Skeleton from "react-loading-skeleton";

const BrandsSkeleton = () => {
  return (
    <div className="flex items-center gap-4 justify-between mt-10 w-full">
      <Skeleton width="100px" height="100px" borderRadius="1rem" />
      <Skeleton width="100px" height="100px" borderRadius="1rem" />
      <Skeleton
        width="100px"
        height="100px"
        borderRadius="1rem"
        className="hidden lg:block"
      />
      <Skeleton
        width="100px"
        height="100px"
        borderRadius="1rem"
        className="hidden lg:block"
      />
      <Skeleton
        width="100px"
        height="100px"
        borderRadius="1rem"
        className="hidden lg:block"
      />
      <Skeleton
        width="100px"
        height="100px"
        borderRadius="1rem"
        className="hidden lg:block"
      />
    </div>
  );
};

export default BrandsSkeleton;
