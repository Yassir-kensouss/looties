import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import LeftSideFilters from "./LeftSideFilters";
import { XMarkIcon } from "@heroicons/react/24/outline";

const MobileFilterDialog = props => {
  const { isMobileDialogOpen, setMobileDialogOpen } = props;

  function closeModal() {
    setMobileDialogOpen(false);
  }

  return (
    <div>
      <Transition appear show={isMobileDialogOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex items-center justify-between"
                  >
                    <div>Craft your filter</div>
                    <button
                      onClick={closeModal}
                      className="basic-btn bg-zinc-100 lg:hidden flex"
                    >
                      <XMarkIcon width="100%" height={20} />
                    </button>
                  </Dialog.Title>
                  <div className="mt-4 max-h-72 overflow-y-auto">
                    <LeftSideFilters />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobileFilterDialog;