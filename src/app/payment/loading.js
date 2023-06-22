import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-8">
        <div className="w-full lg:w-4/6">
          <Skeleton
            width="300px"
            height="20px"
            borderRadius="0.7rem"
            className="mb-4"
          />
          <Skeleton
            width="100%"
            height="40px"
            borderRadius="0.7rem"
            className="mb-2"
          />
          <div className="w-full flex gap-2 mb-4">
            <Skeleton />
            <Skeleton />
          </div>
          <Skeleton
            width="100%"
            height="70px"
            borderRadius="0.7rem"
            className="mb-2"
          />
          <Skeleton
            width="100%"
            height="70px"
            borderRadius="0.7rem"
            className="mb-2"
          />
        </div>
        <div className="w-full lg:w-2/5 border border-zinc-200 rounded-lg p-6">
          <Skeleton
            width="100%"
            height="40px"
            borderRadius="0.7rem"
            className="flex-1 mb-2"
          />
          <Skeleton
            width="100%"
            height="40px"
            className="flex-1 mb-4"
            borderRadius="0.7rem"
          />
          <Skeleton
            width="100%"
            height="70px"
            borderRadius="0.7rem"
            className="mb-2"
          />
          <Skeleton
            width="100%"
            height="70px"
            borderRadius="0.7rem"
            className="mb-2"
          />
          <Skeleton
            width="100%"
            height="30px"
            borderRadius="0.7rem"
            className="mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
