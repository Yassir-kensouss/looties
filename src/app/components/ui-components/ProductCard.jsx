import { AppContext } from "@/app/layout";
import { Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ProductCard = props => {
  const {
    product = {},
    photo,
    title,
    price,
    oldPrice,
    preview,
    width = "350px",
    height = "400px",
    addToCartBtnMargin = "lg:mr-0",
    nameSize = "text-lg",
    priceSize = "text-2xl",
    oldPriceSize = "text-md",
  } = props;
  const [mouseEnter, setMouseEnter] = useState(false);
  const [showVariant, setShowVariant] = useState(false);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [sizes, setSizes] = useState([]);

  const { setCartItems } = useContext(AppContext);

  const addToCart = e => {
    e.stopPropagation();

    if (!size || !color) {
      toast.error("Please ensure the appropriate color and size are chosen.");
      return;
    }

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const variantPrice = product.variants.find(
      el => el.size === size && el.color === color
    );

    const cartProduct = {
      _id: product._id,
      photos: product.photos,
      name: product.name,
      price: variantPrice?.price,
      originalPrice: variantPrice.price,
      size: size,
      color: color,
      quantity: 1,
    };
    const items = [cartProduct, ...cartItems];
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
        style={{ width, height }}
        onMouseEnter={() => setShowVariant(true)}
        onMouseLeave={() => setShowVariant(false)}
      >
        <div style={{ width, height }} className="relative">
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
            <div className="absolute top-3 left-3 z-20 w-11/12 h-max-content bg-white rounded-lg p-2">
              <ProductVariant
                variants={product?.variants}
                size={size}
                setSize={setSize}
                color={color}
                setColor={setColor}
                setSizes={setSizes}
                sizes={sizes}
              />
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
              className={`${nameSize} text-gray-800 capitalize mb-2 w-full text-ellipsis whitespace-nowrap overflow-hidden`}
            >
              {title}
            </h3>
          </Link>
          <div className="flex items-start gap-2">
            <span className={`${priceSize} text-gray-800 font-semibold`}>
              ${price}
            </span>
            {oldPrice ? (
              <del className={`${oldPriceSize} text-gray-400`}>${oldPrice}</del>
            ) : null}
          </div>
        </div>
        <button
          onClick={addToCart}
          aria-label="add to cart"
          data-product={product._id}
          className={`${
            !size || !color
              ? "bg-gray-500 hover:bg-gray-500 active:bg-gray-500"
              : ""
          } rounded-lg text-white bg-gray-700 hover:bg-gray-600 active:bg-gray-800 min-w-12 min-h-12 w-12 h-12 flex items-center justify-center mr-0 ${addToCartBtnMargin}`}
        >
          <ShoppingCartIcon width="100%" height={22} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

const ProductVariant = ({
  variants,
  size,
  setSize,
  color,
  setColor,
  sizes,
  setSizes,
}) => {
  const selectVariantColor = e => {
    e.stopPropagation();

    setColor(e.target.dataset.color);

    const sameColor = variants.filter(
      variant => variant.color === e.target.dataset.color
    );

    setSizes(
      sameColor.map(el => {
        return el.size;
      })
    );
  };

  return (
    <div>
      <div className="flex gap-3">
        {variants?.map(variant => (
          <div
            key={variant._id}
            tabIndex="0"
            data-color={variant.color}
            className={`${
              color === variant.color
                ? "ring-offset-1 ring-2 ring-zinc-950"
                : ""
            } w-10 h-10 rounded-lg cursor-pointer focus:outline outline-2 outline-offset-2 active:opacity-70 transition`}
            style={{
              background: `#${variant.color}`,
              outlineColor: `#${variant.color}`,
            }}
            onClick={selectVariantColor}
          ></div>
        ))}
      </div>
      {sizes.length > 0 ? (
        <div className="flex gap-2 mt-2">
          {sizes.map(el => (
            <div
              key={el}
              tabIndex="0"
              onClick={() => setSize(el)}
              className={`${
                size === el ? "bg-gray-700 text-white" : ""
              } w-10 h-10 rounded-lg cursor-pointer text-sm uppercase flex items-center justify-center font-semibold border-2 border-gray-800`}
            >
              {el}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
