"use client";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/layout";
import { StarIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "next/navigation";
import { addToCart } from "@/utils/helpers";

const ProductDetails = ({ product }) => {
  const searchParams = useSearchParams();

  const { settings, setCartItems } = useContext(AppContext);

  const currency = settings.currency?.split("-")[1];
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [vPrice, setVPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const reduceQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const selectColor = value => {
    setColor(value);
  };

  const selectSize = value => {
    setSize(value);
  };

  useEffect(() => {
    const sizeQuery = searchParams.get("size");
    const colorQuery = searchParams.get("color");
    const qteQuery = searchParams.get("qte");

    if (sizeQuery && colorQuery) {
      setColor(colorQuery);
      setSize(sizeQuery);
      setQuantity(qteQuery);
    } else {
      const defaultColor = Object.keys(product.variants)[0];
      setColor(defaultColor);
      setSize(product.variants[defaultColor][0].size);
    }
  }, []);

  const handleVPrice = el => {
    const newPrice = product.variants[color].find(v => v.size === el);
    setVPrice(newPrice.price);
    setSize(el);
  };

  return (
    <div className="w-full lg:w-8/12 ">
      <div className="divide-y">
        <div className="pb-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="py-2 text-sm text-gray-700 w-4/5">
            {product.shortDescription}
          </p>
          <div className="flex items-center gap-1 my-2">
            <StarIcon width={17} height={17} className="text-amber-400" />
            <StarIcon width={17} height={17} className="text-amber-400" />
            <StarIcon width={17} height={17} className="text-amber-400" />
            <StarIcon width={17} height={17} className="text-amber-400" />
            <StarIcon width={17} height={17} className="text-gray-200" />
            <span className="text-sm">(5)</span>
          </div>
          <div className="flex gap-3">
            <p className="text-xl font-semibold text-gray-700">
              {currency}
              {vPrice}
            </p>
            <p className="text-sm font-medium text-gray-400">
              <del>
                {currency}
                {product.oldPrice}
              </del>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-8 py-4">
          <div>
            <h4 className="mb-2 text-sm text-gray-800 font-medium">
              Available Colors
            </h4>
            <div className="flex items-center gap-2">
              {Object.keys(product.variants).map(item => (
                <span
                  onClick={() => selectColor(item)}
                  style={{ background: `#${item}` }}
                  className={`${
                    item === color ? "ring-2 ring-offset-1 ring-gray-700" : ""
                  } w-10 h-10 flex items-center justify-center capitalize rounded-lg cursor-pointer transition hover:opacity-80`}
                ></span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm text-gray-800 font-medium">
              Available Size
            </h4>
            <div className="flex items-center gap-2">
              {color &&
                product.variants[color].map(item => (
                  <span
                    onClick={() => handleVPrice(item.size)}
                    className={`${
                      size === item.size
                        ? "ring-2 ring-offset-1 ring-gray-700 text-white bg-gray-800"
                        : ""
                    } w-10 h-10 flex items-center justify-center capitalize rounded-lg border-2 cursor-pointer transition hover:bg-gray-800 hover:text-white hover:border-gray-800 border-zinc-200`}
                  >
                    {item.size}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="py-4">
          <p className="mb-2 text-sm">
            <span className="font-semibold">Last one left</span> - make it
            yours!
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 p-2 border border-zinc-200 rounded-lg w-fit">
              <button
                onClick={reduceQuantity}
                className="pl-2 pr-2 hover:opacity-80 transition"
              >
                -
              </button>
              <span className="w-18">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="pl-2 pr-2 hover:opacity-80 transition"
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={e =>
                  addToCart(e, size, color, quantity, product, setCartItems)
                }
                className="hover:bg-gray-700 active:bg-gray-800 focus:ring-2 ring-offset-1 ring-gray-300 bg-gray-800 text-white rounded-lg p-3 text-sm"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
