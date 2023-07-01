import { StarIcon } from "@heroicons/react/20/solid";
import moment from "moment/moment";
import React from "react";

const ProductReview = props => {
  const { rating, review, username, createdAt } = props;
  const rate = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="flex items-center flex-wrap lg:flex-nowrap gap-3">
        <div className="flex items-center gap-1 my-2">
          {rate.map(el => (
            <StarIcon
              key={el}
              width={18}
              height={18}
              className={`${
                el <= rating ? "text-amber-400" : "text-gray-300"
              } cursor-pointer`}
            />
          ))}
          <span className="text-sm">({rating})</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="font-medium">{username}</div>-
          <div className="text-sm text-gray-600">
            {moment(createdAt).format("ll")}
          </div>
        </div>
      </div>
      <p className="text-base text-gray-600 mt-4 leading-6">{review}</p>
    </div>
  );
};

export default ProductReview;
