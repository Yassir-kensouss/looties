const SIZES = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const SHIPPING_PLANS = [
  {
    name: "Free shipping",
    price: "$0",
    priceVal: 0,
    description: "7-30 business days",
  },
  {
    name: "Business",
    price: "$7.50",
    priceVal: 7.5,
    description: "3-14 business days",
  },
  {
    name: "Enterprise",
    price: "$22.50",
    priceVal: 22.5,
    description: "1-3 business days",
  },
];

const PRODUCTS_LIMIT = 9;

const AUTH_TYPE = ["sign in", "sign up"];

export { SIZES, PRODUCTS_LIMIT, AUTH_TYPE, SHIPPING_PLANS };
