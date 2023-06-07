import { AppContext } from "@/app/layout";
import React, { useContext, useEffect } from "react";

const Quantity = ({ quantity, item, setQuantity }) => {
  const { total, setTotal } = useContext(AppContext);

  const reduceQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);

    const cartItems = JSON.parse(localStorage.getItem("cart"));

    const updatedItems = cartItems.map(cartItem => {
      if (cartItem._id === item._id) {
        cartItem.quantity = quantity - 1;
      }
      return cartItem;
    });

    localStorage.setItem("cart", JSON.stringify(updatedItems));

    let totalPrices = 0;
    updatedItems.map(el => {
      totalPrices = totalPrices + el.price * el.quantity;
    });

    setTotal({
      ...total,
      total: totalPrices,
      grandTotal: totalPrices,
    });
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);

    const cartItems = JSON.parse(localStorage.getItem("cart"));

    const updatedItems = cartItems.map(cartItem => {
      if (cartItem._id === item._id) {
        cartItem.quantity = quantity + 1;
      }
      return cartItem;
    });

    localStorage.setItem("cart", JSON.stringify(updatedItems));

    let totalPrices = 0;
    updatedItems.map(el => {
      totalPrices = totalPrices + el.price * el.quantity;
    });

    setTotal({
      ...total,
      total: totalPrices,
      grandTotal: totalPrices,
    });
  };

  const handleInputChange = e => {
    setQuantity(parseInt(e.target.value));

    const cartItems = JSON.parse(localStorage.getItem("cart"));

    const updatedItems = cartItems.map(cartItem => {
      if (cartItem._id === item._id) {
        cartItem.quantity = parseInt(e.target.value);
      }
      return cartItem;
    });

    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <>
      <div
        tabIndex="0"
        className="focus:outline outline-2 outline-gray-600 flex items-center gap-2 p-2 border border-zinc-200 rounded-lg w-fit"
      >
        <button
          onClick={() => reduceQuantity()}
          className="pl-2 pr-2 hover:opacity-80 transition"
        >
          -
        </button>
        <input
          value={quantity}
          onChange={() => handleInputChange()}
          className="w-6"
          min={0}
        />
        <button
          onClick={() => increaseQuantity()}
          className="pl-2 pr-2 hover:opacity-80 transition"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Quantity;
