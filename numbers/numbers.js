"strict mode";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

console.log(23 === 23.0);
// Base 10 - from 0 to 9
// Binary base 2  - 0 1 - JavaScript
console.log(0.1 + 0.2);

// Convert string to a nuber
console.log(Number("23"));
console.log(+"23");

//Parse a number to  a string
console.log(Number.parseInt("23"));
console.log(Number.parseInt("23px"));
console.log(Number.parseInt("px23")); // wont work
console.log(Number.parseInt("23", 10));

console.log(Number.parseFloat("2.3", 10));

// Check if a value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(""));

// Best way to cneck if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));

console.log(Number.isInteger(23));

// Square root
console.log(Math.sqrt(25));
console.log(8 ** (1 / 3));

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.max(1, 2, "3", 4, 5, 6, 7, 8, 9));

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Constants
console.log(Math.PI);
console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.6)); // removes any decimal part 23.6 -> 23
console.log(Math.round(23.6));

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.trunc(-23.6));
console.log(Math.floor(-23.6));

// Rounding decimals
console.log((2.7).toFixed(0)); // returns a string not a number
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // converts to number

// Remainder operator
console.log(5 % 2); // 5 = 2 + 2 + 1
console.log(5 % 3); // 8 = 2 * 3 + 2

const isEven = (n) => n % 2 === 0;
console.log(isEven(8));

//Internalizations
const num = 3884764.23;
const options = {
  style: "unit", // percent, currency
  unit: "mile-per-hour",
};
console.log("US: ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));

const options2 = {
  style: "currency", // percent, currency
  currency: "EUR",
  useGrouping: false,
};
console.log("US: ", new Intl.NumberFormat("en-US", options2).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options2).format(num));
