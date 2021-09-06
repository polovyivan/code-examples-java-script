"strict mode";

// create a date
const now = new Date();
console.log(now);

console.log(new Date("2021-09-05"));
console.log(new Date("December 24, 2015"));

// Month is 0 based
console.log(new Date(2037, 10, 19, 15, 23, 5));

console.log(new Date(2037, 10, 33)); // -> corrects the dates 2037-12-03

// Time from UNIX date
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days after

// Working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log("\n-----DATE METHODS-----");
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());
console.log(future.getTime()); // -> Epoc time
console.log(Date.now());

// .. setMethods() ....

// Date operations
const futureOperations = new Date(2037, 10, 19, 15, 23);
console.log(+futureOperations);

const calsDaysPassed = (date1, date2) =>
  Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
console.log(calsDaysPassed(new Date(2037, 10, 19), new Date(2037, 10, 18)));

// Internalizations
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long", // 2-digits, long
  year: "numeric", // 2-digits
  weekday: "long",
};

const intlDate = new Intl.DateTimeFormat("en-us", options).format(new Date());
console.log(intlDate);
