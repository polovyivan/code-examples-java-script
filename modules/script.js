// Importing module
import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

import * as ShoppingCart from "./shoppingCart.js";
console.log("Importing module");

addToCart("bread", 5);

console.log(price, tq);

ShoppingCart.addToCart("bread", 5);

// Default import
import anyName from "./shoppingCart.js";
