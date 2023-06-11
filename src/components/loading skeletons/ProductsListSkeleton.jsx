import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductsListSkeleton = () => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <Skeleton width="250" height="350" borderRadius="1rem" />
        <Skeleton width="250" height="350" borderRadius="1rem" />
        <Skeleton width="250" height="350" borderRadius="1rem" />
      </div>
      <div className="flex gap-4">
        <Skeleton width="250" height="350" borderRadius="1rem" />
        <Skeleton width="250" height="350" borderRadius="1rem" />
        <Skeleton width="250" height="350" borderRadius="1rem" />
      </div>
    </div>
  );
};

export default ProductsListSkeleton;
