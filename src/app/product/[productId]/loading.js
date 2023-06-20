import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <>
      <Skeleton
        width="500px"
        height="27px"
        borderRadius="0.5rem"
        className="mb-5"
      />
      <div className="flex gap-12 items-start">
        <div>
          <div>
            <Skeleton
              width="500px"
              height="400px"
              borderRadius="0.5rem"
              className="mb-4"
            />
            <div className="flex gap-4">
              <Skeleton width="115px" height="115px" borderRadius="0.5rem" />
              <Skeleton width="115px" height="115px" borderRadius="0.5rem" />
              <Skeleton width="115px" height="115px" borderRadius="0.5rem" />
              <Skeleton width="115px" height="115px" borderRadius="0.5rem" />
            </div>
          </div>
        </div>
        <div>
          <Skeleton
            width="500px"
            height="27px"
            borderRadius="0.5rem"
            className="mb-3"
          />
          <Skeleton
            width="100px"
            height="20px"
            borderRadius="0.5rem"
            className="mb-3"
          />
          <Skeleton width="30px" height="20px" borderRadius="0.5rem" />
          <div className="flex gap-8 py-5">
            <div>
              <Skeleton
                width="100px"
                height="20px"
                borderRadius="0.5rem"
                className="mb-3"
              />
              <div className="flex gap-4">
                <Skeleton
                  width="40px"
                  height="40px"
                  borderRadius="0.5rem"
                  className="mb-3"
                />
                <Skeleton
                  width="40px"
                  height="40px"
                  borderRadius="0.5rem"
                  className="mb-3"
                />
                <Skeleton
                  width="40px"
                  height="40px"
                  borderRadius="0.5rem"
                  className="mb-3"
                />
              </div>
            </div>
            <div>
              <Skeleton
                width="100px"
                height="20px"
                borderRadius="0.5rem"
                className="mb-3"
              />
              <div className="flex gap-4">
                <Skeleton
                  width="40px"
                  height="40px"
                  borderRadius="0.5rem"
                  className="mb-3"
                />
                <Skeleton
                  width="40px"
                  height="40px"
                  borderRadius="0.5rem"
                  className="mb-3"
                />
                <Skeleton
                  width="40px"
                  height="40px"
                  borderRadius="0.5rem"
                  className="mb-3"
                />
              </div>
            </div>
          </div>
          <div>
            <Skeleton
              width="100px"
              height="20px"
              borderRadius="0.5rem"
              className="mb-1"
            />
            <div className="py-4 flex gap-4">
              <Skeleton width="50px" height="30px" borderRadius="0.5rem" />
              <Skeleton width="50px" height="30px" borderRadius="0.5rem" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
