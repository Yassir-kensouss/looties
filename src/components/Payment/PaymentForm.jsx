import DropIn from "braintree-web-drop-in-react";
import React, { useEffect, useState } from "react";

const PaymentForm = ({ braintreeData }) => {
  const [data, setData] = useState({
    braintreeToken: null,
    error: null,
    instance: {},
  });

  useEffect(() => {
    setData({ ...data, braintreeToken: braintreeData.token });
  }, []);

  return (
    <div>
      {data.braintreeToken ? (
        <DropIn
          onError={error => console.log("error", error)}
          options={{
            authorization: data.braintreeToken,
            paypal: {
              flow: "vault",
            },
          }}
          onInstance={instance => (data.instance = instance)}
        />
      ) : null}
      <div className="flex w-full justify-end">
        <button className=" text-center p-2 py-4 rounded-lg bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800 focus:ring-2 ring-offset-2 ring-zinc-400 mt-4">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
