"use client";
import { Fragment, useContext, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  PhoneIcon,
  PlayCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import SearchInput from "./inputs/SearchInput";
import { AppContext } from "../layout";
import { isAuthenticated } from "@/utils/helpers";
import ProfileDropdown from "./ui-components/ProfileDropdown";
import AuthContainer from "@/components/Auth/AuthContainer";
import { usePathname, useRouter } from "next/navigation";
import { useQuery } from "react-query";
import { fetchCategories } from "@/services/categories";
import Image from "next/image";
import { signout } from "@/services/auth";

const products = [
  {
    name: "Products",
    description: "Browse our latest products",
    href: "/products",
    icon: ShoppingBagIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { cartItems, settings } = useContext(AppContext);

  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useQuery("fetch-categories", async () => {
    const response = await fetchCategories();
    const data = await response.data.categories;
    setCategories(data);
    return data;
  });

  const { refetch, isLoading } = useQuery(
    "logout",
    async () => {
      const userId = isAuthenticated().user._id;
      const response = await signout(userId);
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
      onSuccess: () => {
        localStorage.removeItem("lotie_jwt_data");
        router.push("/");
      },
    }
  );

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-20">
      <nav
        className="mx-auto gap-5 flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="relative -m-1.5 p-1.5">
            <img
              alt={settings.websiteTitle}
              className="h-8 w-auto"
              src={settings.brand}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Shop
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4 h-96 overflow-auto">
                  {products.map(item => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                  {categories.map(category => (
                    <div
                      key={category.label}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="relative flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <Image
                          fill
                          src={category.image}
                          className="block w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={`/products?category=${category.name}`}
                          className="block font-semibold text-gray-900"
                        >
                          {category.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">
                          Browse our latest products
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/most-wanted"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Most wanted
          </Link>
          <Link
            href="/new-arrival"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            New arrival
          </Link>
          <Link
            href="/brands"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Brands
          </Link>
        </Popover.Group>
        <div className="flex items-center gap-6 hidden lg:flex lg:flex-1 lg:justify-end">
          <SearchInput />
          <Link
            href={`/cart?path=${encodeURIComponent(pathname)}`}
            className="relative basic-btn"
            aria-label="shopping cart"
          >
            {cartItems?.length > 0 ? (
              <div
                aria-label="shopping cart badge"
                className="absolute -top-1 -right-1 rounded-lg w-5 h-5 flex items-center justify-center bg-violet-500 text-white font-semibold text-xs"
              >
                {cartItems?.length}
              </div>
            ) : null}
            <ShoppingCartIcon width="100%" height={20} aria-hidden="true" />
          </Link>
          {isAuthenticated() ? (
            <ProfileDropdown />
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="outline-none basic-btn"
              aria-label="authentication dialog"
            >
              <UserIcon width="100%" height={19} aria-hidden="true" />
            </button>
          )}
          <AuthContainer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
      <Transition appear show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-500/10 pt-8">
                  <SearchInput setMobileMenuOpen={setMobileMenuOpen} />
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Product
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {products.map(item => (
                              <div
                                key={item.name}
                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                              >
                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <item.icon
                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div className="flex-auto">
                                  <a
                                    onClick={() => setMobileMenuOpen(false)}
                                    href={item.href}
                                    className="block font-semibold text-gray-900"
                                  >
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </a>
                                  <p className="mt-1 text-gray-600">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                            {categories.map(category => (
                              <div
                                key={category.label}
                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                              >
                                <div className="relative flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <Image
                                    fill
                                    src={category.image}
                                    className="block w-full h-full object-cover rounded-md"
                                  />
                                </div>
                                <div className="flex-auto">
                                  <Link
                                    onClick={() => setMobileMenuOpen(false)}
                                    href={`/products?category=${category.name}`}
                                    className="block font-semibold text-gray-900"
                                  >
                                    {category.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                  <p className="mt-1 text-gray-600">
                                    Browse our latest products
                                  </p>
                                </div>
                              </div>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Most wanted
                    </Link>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      New arrivals
                    </Link>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Brands
                    </Link>
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      href={`/cart?path=${encodeURIComponent(pathname)}`}
                      className="relative flex items-center gap-4 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-label="shopping cart"
                    >
                      {cartItems?.length > 0 ? (
                        <div
                          aria-label="shopping cart badge"
                          className="absolute -top-1 -right-1 rounded-lg w-5 h-5 flex items-center justify-center bg-violet-500 text-white font-semibold text-xs"
                        >
                          {cartItems?.length}
                        </div>
                      ) : null}
                      <ShoppingCartIcon
                        width={20}
                        height={20}
                        aria-hidden="true"
                      />
                      Cart
                    </Link>
                  </div>
                  <div className="py-6">
                    {isAuthenticated() ? (
                      <div
                        onClick={() => refetch()}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log out
                      </div>
                    ) : (
                      <button
                        onClick={() => setIsOpen(true)}
                        className="-mx-3 flex items-center gap-4 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        aria-label="authentication dialog"
                      >
                        <UserIcon width={20} height={20} aria-hidden="true" />
                        Sign In
                      </button>
                    )}
                    <AuthContainer isOpen={isOpen} setIsOpen={setIsOpen} />
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
