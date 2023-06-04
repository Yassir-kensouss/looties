import React, { useEffect } from "react";

const Quantity = ({ quantity, item, setQuantity }) => {
  const reduceQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    const updatedItems = cartItems.map(cartItem => {
      if (cartItem._id === item._id) {
        cartItem.quantity = quantity;
      }
      return cartItem;
    });

    localStorage.setItem("cart", JSON.stringify(updatedItems));
  }, [quantity]);

  return (
    <>
      <div
        tabIndex="0"
        className="focus:outline outline-2 outline-gray-600 flex items-center gap-2 p-2 border border-zinc-200 rounded-lg w-fit"
      >
        <button
          onClick={reduceQuantity}
          className="pl-2 pr-2 hover:opacity-80 transition"
        >
          -
        </button>
        <input
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
          className="w-6"
          min={0}
        />
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="pl-2 pr-2 hover:opacity-80 transition"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Quantity;
