import React, { Suspense } from "react";
import Product from "./page";
import Loading from "./loading";

const Layout = ({ params }) => {
  const { productId } = params;
  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <Suspense fallback={<Loading />}>
        <Product productId={productId} />
      </Suspense>
    </main>
  );
};

export default Layout;
