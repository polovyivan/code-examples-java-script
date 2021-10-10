"strict mode";

// Data
const account1 = {
  owner: "Ivan Polovyi",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

let arr = ["a", "b", "c", "d", "e"];

// SLICE - does not mutaite an original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1)); // last element of an array
console.log(arr.slice()); // Shellow copy
console.log([...arr]); // Shellow copy

// SPLICE - mutaites original array
console.log(arr.splice(-2)); // remove last element of an array
console.log(arr);

// REVERSE - mutaites original array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

// LOOP forEach ( No break and continue statements!!!)
const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-----FOR EACH-----");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// LOOP OVER MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// LOOP OVER SET
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// MAP
const eurToUsd = 1.1;

const movementsToMap = [200, 450, -400, 3000, -650, 130, 70, 1300];

const movementsToMapUSD = movementsToMap.map(function (mov) {
  return mov * eurToUsd;
});

const movementsToMapUSDArrow = movementsToMap.map((mov) => mov * eurToUsd);

console.log(movementsToMap);
console.log(movementsToMapUSDArrow);

const movementDescriptions = movementsToMap.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrawal"}  ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);

// FILTER
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

// REDUCE

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);

  return acc + cur;
}, 0);
console.log(balance);

const balanceArr = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balanceArr);

//Max value
const max = movements.reduce((acc, mov) => {}, movements[0]);

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  // .map((mov, i, arr) => { // check return from filter
  //   console.log(arr);
  //   return mov * eurToUsd;
  // })
  .reduce((acc, mov) => acc + mov, 0);

// FIND first element in an array
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

// FIND INDEX
const index = accounts.findIndex((acc) => acc.owner === "Jessica Davis");
console.log(index);

// DELETE element from an array by index
accounts.splice(index, 1);
console.log(accounts.findIndex((acc) => acc.owner === "Jessica Davis"));

//INCLUDES - testing for equality
console.log(movements.includes(-650));

//SOME
console.log(movements.some((mov) => mov > 0));

//EVERY - returns true if every elements satisfy the condition, else - false
console.log(movements.every((mov) => mov > 0));

//FLAT
const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrFlat.flat());

const arrFlatDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrFlatDeep.flat(2)); // 2 levels deep

// FLATMAP = FLAT + MAP - goes only one level deep only

// SORT
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort()); // - mutates original array

console.log(movements);
console.log(movements.sort()); // sorts by strings not by nambers

//return < 0, A, B (keep order)
//return > 0, B, A (switch order)
// Ascending
//movements.sort((a, b) => (a > b ? 1 : -1));
movements.sort((a, b) => a - b); // for numbers only
console.log(movements);

// Descending
//movements.sort((a, b) => (a < b ? 1 : -1));
movements.sort((a, b) => b - a); // for numbers only
console.log(movements);

// Create an arrays
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array([1, 2, 3, 4, 5, 6, 7]));

const x = new Array(7); // empty array size 7
//x.fill(1);
//x.fill(1, 3); // starts from index 3
x.fill(1, 3, 5); // starts from index 3 end at 4
console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

// Reduce to an object
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

const convertTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = [
    "a",
    "an",
    "the",
    "but",
    "and",
    "or",
    "on",
    "in",
    "in",
    "with",
  ];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
