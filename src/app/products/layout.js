import React, { Suspense } from "react";
import Products from "./page";
import Loading from "./loading";
import CallToAction from "../components/home/CallToAction";
import Subscribe from "../components/home/Subscribe";

const Layout = () => {
  return (
    <main className="mx-auto gap-5 max-w-7xl p-6 lg:px-8">
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
      <CallToAction />
      <Subscribe />
    </main>
  );
};

export default Layout;
