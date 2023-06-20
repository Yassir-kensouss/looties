import { toast } from "react-hot-toast";
import uniqid from "uniqid";

export const isAuthenticated = () => {
  const jwt = localStorage.getItem("jwt_data");

  if (jwt) {
    return JSON.parse(jwt);
  } else {
    return false;
  }
};

export const addToCart = (e, size, color, quantity, product, setCartItems) => {
  e.stopPropagation();

  // Force the user to choose color and size first
  if (!size || !color) {
    toast.error("Please ensure the appropriate color and size are chosen.");
    return false;
  }

  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const variantPrice = product.variants[color].find(el => el.size === size);

  const cartProduct = {
    vid: uniqid(),
    productId: product._id,
    photos: product.photos,
    name: product.name,
    price:
      Object.keys(product.variants).length > 0
        ? variantPrice?.price
        : product.price,
    originalPrice:
      Object.keys(product.variants).length > 0
        ? variantPrice?.price
        : product.price,
    size: size,
    color: color,
    quantity: quantity,
  };

  // check if cart already contain the added product
  const _vr =
    cartItems.find(
      el =>
        el.size === cartProduct.size &&
        el.color === cartProduct.color &&
        el._id === cartProduct._id
    ) || {};

  // Increase the quantity, If the product already exist in the cart with same variants
  if (Object.keys(_vr).length > 0) {
    const newCartContent = cartItems.filter(
      el =>
        el.size !== cartProduct.size &&
        el.color !== cartProduct.color &&
        el._id !== cartProduct._id
    );
    _vr.quantity = _vr.quantity + 1;
    const items = [_vr, ...newCartContent];
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  } else {
    const items = [cartProduct, ...cartItems];
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  }
};
