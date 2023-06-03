import React from "react";

const Quantity = ({ quantity, setQuantity }) => {
  const reduceQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="flex items-center gap-2 p-2 border border-zinc-200 rounded-lg w-fit">
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
