import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <Skeleton
        width="300px"
        height="15px"
        borderRadius="0.5rem"
        className="mb-6"
      />
      <div className="w-full flex items-start gap-4">
        <div className="w-1/4 hidden lg:block">
          <Skeleton
            width="w-full"
            height="40px"
            borderRadius="0.5rem"
            className="mb-2"
          />
          <Skeleton
            width="w-full"
            height="40px"
            borderRadius="0.5rem"
            className="mb-2"
          />
          <Skeleton
            width="w-full"
            height="40px"
            borderRadius="0.5rem"
            className="mb-2"
          />
          <Skeleton
            width="w-full"
            height="40px"
            borderRadius="0.5rem"
            className="mb-2"
          />
        </div>
        <div className="lg:w-3/4 w-full">
          <Skeleton
            width="300px"
            height="20px"
            className="mb-4"
            borderRadius="0.5rem"
          />
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Skeleton
                width="50px"
                height="30px"
                className="mb-4"
                borderRadius="0.5rem"
              />
              <Skeleton
                width="30px"
                height="30px"
                className="mb-4"
                borderRadius="0.5rem"
              />
              <Skeleton
                width="60px"
                height="30px"
                className="mb-4"
                borderRadius="0.5rem"
              />
            </div>
            <Skeleton
              width="50px"
              height="20px"
              className="mb-4"
              borderRadius="0.5rem"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Skeleton
              width="100%"
              height="300px"
              className="mb-4"
              borderRadius="0.5rem"
            />
            <Skeleton
              width="100%"
              height="300px"
              className="mb-4"
              borderRadius="0.5rem"
            />
            <Skeleton
              width="100%"
              height="300px"
              className="mb-4"
              borderRadius="0.5rem"
            />
            <Skeleton
              width="100%"
              height="300px"
              className="mb-4"
              borderRadius="0.5rem"
            />
            <Skeleton
              width="100%"
              height="300px"
              className="mb-4"
              borderRadius="0.5rem"
            />
            <Skeleton
              width="100%"
              height="300px"
              className="mb-4"
              borderRadius="0.5rem"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
