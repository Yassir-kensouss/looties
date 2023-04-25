import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100">
      <div className="mx-auto max-w-7xl py-10 lg:px-8 border-b-2">
        <div className="flex lg:flex-row flex-col lg:items-center items-start px-4 lg:p-0">
          <div className="lg:w-2/6 w-full mb-6 lg:mb-0">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            />
            <p className="text-slate-400 font-medium mt-4 text-sm">
              Components in the Client Component module graph are primarily
              rendered on the client.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col items-start w-4/6	justify-evenly">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-slate-600 font-semibold text-sm mb-4">
                SHOP
              </h3>
              <ul className="flex flex-col gap-1 text-slate-500">
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    All collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    Winter edition
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    Discount
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4 lg:mb-0">
              <h3 className="text-slate-600 font-semibold text-sm mb-4">
                COMPANY
              </h3>
              <ul className="flex flex-col gap-1 text-slate-500">
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4 lg:mb-0">
              <h3 className="text-slate-600 font-semibold text-sm mb-4">
                SUPPORT
              </h3>
              <ul className="flex flex-col gap-1 text-slate-500">
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-slate-400 text-sm"
                    href="#"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-600 font-semibold text-sm mb-4">
                PAYMENT METHODS
              </h3>
              <Image
                src="/assets/payment-services.png"
                height="30"
                width="140"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center px-8 lg:px-0 pb-8 pt-8 text-sm text-slate-400 font-medium">
          Copyright © {year} Nostra. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
