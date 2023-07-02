import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const SuccessPayment = () => {
  return (
    <main className="mx-auto gap-5 max-w-7xl p-6 lg:px-8">
      <div className="py-8 flex flex-col items-center justify-center">
        <div className="text-green-400 mb-4">
          <CheckCircleIcon width={90} height={90} />
        </div>
        <div className="text-center uppercase text-4xl font-normal text-gray-900">
          You have successfully <br />
          make the order
        </div>
        <p className="mt-2 lg:w-3/5 w-full text-center text-gray-500 leading-7">
          An email has been sent to your registered email address for
          confirmation. Please check your inbox, including the spam folder, to
          locate the message. If you have any questions or need assistance,
          please don't hesitate to contact our support team. They will be happy
          to help you.
        </p>
        <Link
          href="/products"
          className="flex items-center mt-3 hover:text-gray-500 active:text-gray-600 gap-2 text-gray-600"
        >
          Make another order{" "}
          <ArrowRightIcon className="text-gray-900" width={18} height={18} />
        </Link>
      </div>
    </main>
  );
};

export default SuccessPayment;
