import React from "react";
import MailInput from "../inputs/MailInput";
import Link from "next/link";

const Subscribe = () => {
  return (
    <section className="my-32">
      <div className="w-full flex justify-center items-center flex-col gap-4">
        <h3 className="text-3xl lg:text-4xl font-semibold w-full lg:w-3/5 text-center text-gray-900 leading-snug">
          Subscribe to our newsletter to get updates to our latest collection
        </h3>
        <p className="text-md font-medium text-zinc-600 text-center">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
        <div className="flex lg:flex-row flex-col gap-2">
          <MailInput />
          <button className="text-white lg:w-fit w-full text-md tracking-wider bg-gray-800 p-3 rounded-lg">
            Subscribe
          </button>
        </div>
        <p className="text-sm font-medium text-zinc-500 text-center">
          You will be able to unsubscribe at any time.
          <br /> Read our Privacy Policy{" "}
          <Link href="#" className="underline text-gray-900 font-semibold">
            here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
