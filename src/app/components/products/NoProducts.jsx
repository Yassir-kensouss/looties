import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const NoProducts = ({ classnames }) => {
  return (
    <div
      className={`w-full flex flex-col justify center items-center ${classnames} `}
    >
      <ArchiveBoxXMarkIcon className="text-violet-500 w-10 h-10" />
      <h2 className="text-xl text-gray-800 my-3 capitalize">
        No Products exist
      </h2>
      <p className="text-gray-600 leading-7 w-2/3 text-center">
        Products does not exist or your applied filter does not match
      </p>
    </div>
  );
};

export default NoProducts;
