import DropIn from "braintree-web-drop-in-react";
import React from "react";

const PaymentDropIn = ({ data }) => {
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
    </div>
  );
};

export default PaymentDropIn;
