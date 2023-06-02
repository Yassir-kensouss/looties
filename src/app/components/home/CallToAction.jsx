import Image from "next/image";
import React from "react";
import Button from "../ui-components/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CustomLink from "../ui-components/CustomLink";

const CallToAction = () => {
  return (
    <section className="mt-32">
      <div className="flex flex-col lg:flex-row items-center h-full lg:h-80 w-full rounded-lg">
        <div className="w-full lg:w-3/6	h-80 lg:h-full relative">
          <Image
            src="/assets/cta.jpg"
            alt="call to action"
            fill
            className="object-cover rounded-tr-lg rounded-tl-lg lg:rounded-lt-lg lg:rounded-bl-lg lg:rounded-tr-none "
          />
        </div>
        <div className="w-full lg:w-3/6	h-80 lg:h-full bg-gray-800 lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-bl-none rounded-br-lg rounded-bl-lg flex items-center">
          <div className="pl-8">
            <div className="uppercase text-gray-300 tracking-widest text-md">
              Limited offer
            </div>
            <p className="text-3xl lg:text-4xl w-5/6 text-white font-semibold leading-snug mt-2">
              35% Off only this friday and get special gift
            </p>
            <CustomLink
              href="#"
              text="Grab it now"
              icon={<ArrowRightIcon width={19} height={19} />}
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
