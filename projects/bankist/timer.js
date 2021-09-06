"strict mode";

// setTimeout

setTimeout(() => console.log("Here is your pizza"), 3000);
// all arguments after delay will be passed to a call back function
console.log("Waiting...");

// all arguments after delay will be passed to a call back function
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  "olives",
  "spinach"
);

// Can cancel timeout
const ingridients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingridients
);
console.log("Waiting...");

if (ingridients.includes("spinach")) clearTimeout(pizzaTimer);

// setInterval - execution every n milliseconds
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
