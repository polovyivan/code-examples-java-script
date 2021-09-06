"strict mode";

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// Function returns another function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Ivan");
greeterHey("Miguel");

greet("Hey")("Ivan");

// Call and Apply methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Ivan Polovyi");
lufthansa.book(635, "Miguel Polovyi");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, "Sara Williams");
// Call method
book.call(eurowings, 23, "Sara Williams");
console.log(eurowings);
book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Ivan Polovyi");

// Immwdiately Invoked Function - invoked only once
const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

//IIFE
(function () {
  console.log("This will never run again");
})();
(() => console.log("This will ALSO never run again"))();
