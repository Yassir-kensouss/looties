import { isAuthenticated } from "@/utils/helpers";
import { Popover, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { Fragment } from "react";
import { useQuery } from "react-query";

const ProfileDropdown = () => {
  const { refetch } = useQuery(
    "logout",
    async () => {
      const userId = isAuthenticated().user._id;
      const response = await signout(userId);
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
      onSuccess: () => {
        localStorage.removeItem("jwt_data");
      },
    }
  );

  return (
    <div>
      <Popover className="relative">
        <Popover.Button>
          {isAuthenticated() && isAuthenticated().user.avatar ? (
            <div className="relative w-10 h-10 rounded-full">
              <Image
                className="w-full h-full rounded-full object-cover"
                fill
                alt="profile image"
                src={isAuthenticated().user.avatar}
              />
            </div>
          ) : (
            <button className="outline-none basic-btn" aria-label="profile">
              <UserIcon width="100%" height={19} aria-hidden="true" />
            </button>
          )}
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
          <Popover.Panel className="border border-2 border-zinc-200 absolute z-10 right-0 bg-white shadow-lg rounded-lg w-32 p-1">
            <div className="hover:bg-zinc-100 active:bg-zinc-50 cursor-pointer text-base text-gray-800 p-2">
              Profile
            </div>
            <div
              onClick={refetch}
              className="hover:bg-zinc-100 active:bg-zinc-50 cursor-pointer text-base text-gray-800 p-2"
            >
              Log out
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default ProfileDropdown;
