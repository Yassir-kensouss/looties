import React from "react";

const PageNotFound = () => {
  return (
    <main className="mx-auto gap-5 max-w-7xl p-6 lg:px-8">
      <div className="flex items-center justify-center w-full h-96">
        <div>
          <h3 className="text-center font-semibold text-6xl uppercase text-gray-800">
            You are lost.
          </h3>
          <p className="text-gray-600 mt-3 text-lg text-center">
            The page or link you are trying to reach is not exist
          </p>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
