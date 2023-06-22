import React, { Suspense } from "react";
import Payment from "./page";
import Loading from "./loading";

const layout = () => {
  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <Suspense fallback={<Loading />}>
        <Payment />
      </Suspense>
    </main>
  );
};

export default layout;
