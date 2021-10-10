// Exporting module
console.log("Exporting module");

// Can be used only here
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${product} ${quantity} added to a cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${product} ${quantity} added to a cart`);
}
