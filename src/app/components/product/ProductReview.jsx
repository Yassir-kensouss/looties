import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

const ProductReview = props => {
  const { rating, review, username, createdAt } = props;
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 my-2">
          <StarIcon width={17} height={17} className="text-amber-400" />
          <StarIcon width={17} height={17} className="text-amber-400" />
          <StarIcon width={17} height={17} className="text-amber-400" />
          <StarIcon width={17} height={17} className="text-amber-400" />
          <StarIcon width={17} height={17} className="text-gray-200" />
          <span className="text-sm">({rating})</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="font-medium">{username}</div>-
          <div className="text-sm text-gray-600">{createdAt}</div>
        </div>
      </div>
      <p className="text-base text-gray-600 mt-4 leading-6">{review}</p>
    </div>
  );
};

export default ProductReview;
