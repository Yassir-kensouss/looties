import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useMutation } from "react-query";
import { signin, signup } from "@/services/auth";
import { AUTH_TYPE } from "@/utils/constants";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AuthContainer = ({ isOpen, setIsOpen }) => {
  const [auth, setAuth] = useState(AUTH_TYPE[0]);
  const [phone, setPhone] = useState(null);

  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  const signinQuery = useMutation(data => signin(data), {
    onSuccess: data => {
      localStorage.setItem("jwt_data", JSON.stringify(data.data));
      router.refresh();
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Password or email are incorrect");
    },
  });

  const signupQuery = useMutation(data => signup(data), {
    onSuccess: data => {
      localStorage.setItem("jwt_data", JSON.stringify(data.data));
      router.refresh();
      setIsOpen(false);
    },
    onError: error => {
      toast.error(error.response.data.error);
    },
  });

  const signIn = values => {
    signinQuery.mutate(values);
  };

  const signUp = values => {
    signupQuery.mutate({
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
    <>
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
                            isLoading={signinQuery.isLoading}
                            submit={signIn}
                          />
                        ) : (
                          <SignUp
                            auth={auth}
                            setAuth={setAuth}
                            isLoading={signupQuery.isLoading}
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
    </>
  );
};

export default AuthContainer;
