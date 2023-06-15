import { AppContext } from "@/app/layout";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { signin, signup } from "@/services/auth";
import { AUTH_TYPE } from "@/utils/constants";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { Fragment, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useMutation } from "react-query";

const AddReview = ({ isOpen, setIsOpen }) => {
  const { setProfile } = useContext(AppContext);

  const [auth, setAuth] = useState(AUTH_TYPE[0]);
  const [phone, setPhone] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  const signin = useMutation(data => signin(data), {
    onSuccess: data => {
      localStorage.setItem("jwt_data", JSON.stringify(data.data));
      setProfile(data.data.user);
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Password or email are incorrect");
    },
  });

  const signup = useMutation(data => signup(data), {
    onSuccess: data => {
      localStorage.setItem("jwt_data", JSON.stringify(data.data));
      setProfile(data.data.user);
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Password or email are incorrect");
    },
  });

  const signIn = values => {
    signin.mutate(values);
  };

  const signUp = values => {
    signup.mutate({
      name: values.name,
      email: values.email,
      password: values.password,
      mobile: phone,
      role: 0,
      address: {
        country: values.country,
        city: values.city,
        state: values.state,
        zipCode: values.postal_code,
        address: values.address,
      },
    });
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black bg-opacity-40" />
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
                <Dialog.Panel
                  style={{ width: "900px", height: "500px" }}
                  className="transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
                >
                  <div className="flex h-full">
                    <div style={{ height: "500px" }} className="relative w-1/3">
                      <Image
                        className="w-full h-full block object-cover"
                        fill
                        alt="signup-bg"
                        src="/assets/signup-bg.jpg"
                      />
                    </div>
                    <div className="overflow-auto flex w-2/3">
                      <div className="w-full p-14 overflow-auto">
                        {auth === AUTH_TYPE[0] ? (
                          <SignIn
                            auth={auth}
                            setAuth={setAuth}
                            isLoading={signup.isLoading}
                            submit={signIn}
                          />
                        ) : (
                          <SignUp
                            auth={auth}
                            setAuth={setAuth}
                            isLoading={isLoading}
                            submit={signUp}
                            phone={phone}
                            setPhone={setPhone}
                          />
                        )}
                      </div>
                    </div>
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

export default AddReview;
