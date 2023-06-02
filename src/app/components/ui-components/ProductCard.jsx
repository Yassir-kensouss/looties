import { AppContext } from "@/app/layout";
import { Transition } from "@headlessui/react";
import { PlusIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const ProductCard = props => {
  const { product, photo, title, price, oldPrice, preview } = props;
  const [mouseEnter, setMouseEnter] = useState(false);
  const [showVariant, setShowVariant] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const { setCartItems } = useContext(AppContext);

  const addToCart = e => {
    e.stopPropagation();
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const items = [product, ...cartItems];
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      console.log("first", JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      // href="/product"
    >
      <div
        className="relative"
        style={{ width: "350px", height: "400px" }}
        onMouseEnter={() => setShowVariant(true)}
        onMouseLeave={() => setShowVariant(false)}
      >
        <div style={{ width: "350px", height: "400px" }} className="relative">
          <Image
            src={photo}
            fill
            className="rounded-lg object-cover"
            alt={title}
          />
        </div>
        <Transition
          show={mouseEnter}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Image
            src={preview}
            fill
            className="object-cover rounded-lg absolute top-0 left-0 z-20"
            alt={title}
          />
        </Transition>
        {
          <Transition
            show={showVariant}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute top-3 left-4 z-20 w-11/12 h-max-content bg-white rounded-lg p-2">
              <ProductVariant variants={product.variants} />
            </div>
          </Transition>
        }
      </div>
      <div className="flex items-start justify-between mt-4">
        <div className="w-4/6">
          <Link
            href="/product"
            className="cursor-pointer hover:opacity-80 transition"
          >
            <h3
              title={title}
              className="text-lg text-gray-800 capitalize mb-2 w-full text-ellipsis whitespace-nowrap overflow-hidden"
            >
              {title}
            </h3>
          </Link>
          <div className="flex items-start gap-2">
            <span className="text-2xl text-gray-800 font-semibold">
              ${price}
            </span>
            {oldPrice ? (
              <del className="text-md text-gray-400">${oldPrice}</del>
            ) : null}
          </div>
        </div>
        <button
          onClick={addToCart}
          aria-label="add to cart"
          className="rounded-lg text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-800 min-w-12 min-h-12 w-12 h-12 flex items-center justify-center mr-0 lg:mr-4"
        >
          <ShoppingCartIcon width="100%" height={22} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

const ProductVariant = ({ variants }) => {
  const [size, setSize] = useState([]);

  const selectVariantColor = e => {
    e.stopPropagation();
    const sameColor = variants.filter(
      variant => variant.color === e.target.dataset.color
    );

    setSize(
      sameColor.map(el => {
        return el.size;
      })
    );
  };

  return (
    <div>
      <div className="flex gap-2">
        {variants.map(variant => (
          <div
            key={variant._id}
            tabIndex="0"
            data-color={variant.color}
            className="w-10 h-10 rounded-lg cursor-pointer focus:outline outline-2 outline-offset-2 active:opacity-70 transition"
            style={{
              background: `#${variant.color}`,
              outlineColor: `#${variant.color}`,
            }}
            onClick={selectVariantColor}
          ></div>
        ))}
      </div>
      {size.length > 0 ? (
        <div className="flex gap-2 mt-2">
          {size.map(size => (
            <div
              tabIndex="0"
              className="w-10 h-10 rounded-lg cursor-pointer text-sm uppercase flex items-center justify-center font-semibold border-2 border-gray-800"
            >
              {size}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
