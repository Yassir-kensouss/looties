import { signout } from "@/services/auth";
import { isAuthenticated } from "@/utils/helpers";
import { Popover, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { useQuery } from "react-query";

const ProfileDropdown = () => {
  const router = useRouter();

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
        localStorage.removeItem("jwt_data");
        router.refresh();
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
              className="flex justify-between items-center gap-2 hover:bg-zinc-100 active:bg-zinc-50 cursor-pointer text-base text-gray-800 p-2"
            >
              <div>Log out</div>
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 h-5 w-5 text-gray"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default ProfileDropdown;
