"use client";
import React, { Suspense, useState } from "react";
import Payment from "./page";
import Loading from "./loading";
import { isAuthenticated } from "@/utils/helpers";
import AuthContainer from "@/components/Auth/AuthContainer";

const layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="mx-auto max-w-7xl p-6 lg:px-8">
      <Suspense fallback={<Loading />}>
        {isAuthenticated() ? (
          <Payment />
        ) : (
          <>
            <p className="mt-4 text-gray-900 text-4xl uppercase font-semibold h-48 flex items-center justify-center">
              Sign up to make a payment
            </p>
            <AuthContainer isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
      </Suspense>
    </main>
  );
};

export default layout;
