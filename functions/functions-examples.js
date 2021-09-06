"strict mode";

console.log(functionDeclaration("Before declaration"));
//Function declaration
function functionDeclaration(input) {
  return `Function declaration returns input "${input}"`;
}

console.log(functionDeclaration("After declaration"));

// Function expretion
const functionExpression = function (input) {
  return `Function expretion returns input "${input}"`;
};

console.log(functionExpression("Only! after expression"));

// Arrow function one line (one line)
const arrowFunction = (input) =>
  `Arrow function (one line) returns input "${input}"`;

console.log(arrowFunction("Only! after declaration"));

// Arrow function (more than one line)
const arrowFunctionMoreThanOneLine = (input) => {
  const returnValue = `Arrow function (more than one line) returns input "${input}"`;
  return returnValue;
};

console.log(arrowFunctionMoreThanOneLine("Only! after declaration"));

// Default parameters
console.log("\nDefault parameters");
const bookings = [];

const createBooking = function (flightNum, numPassangers = 1, price = 199) {
  // ES5
  // numPassangers = numPassangers || 1;
  // price = price || 199;

  price = 199 * numPassangers;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 800);

// Skip parameter
createBooking("LH123", undefined, 800);
