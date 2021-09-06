"use strict";

// used to build an array or pass into the function

const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr1 = [1, 2, ...arr];
console.log(goodNewArr1);

const goodNewArr2 = [...arr, 1, 2];
console.log(goodNewArr2);

console.log(...arr);

// Copy an arry
const goodNewArr1Copy = [...goodNewArr1];
console.log(goodNewArr1Copy);

// Join two or more arrays
const joinedArray = [...goodNewArr1, ...goodNewArr2];
console.log(joinedArray);

const str = "Ivan";
const letters = [...str, " ", "P."];
console.log(letters);
console.log(...letters);

// pass spread operator into function
function acceptsSpreadOperator(ar1, ar2, ar3) {
  console.log(ar1, ar2, ar3);
}

const arrFun = [1, 2, 3];
acceptsSpreadOperator(...arrFun);

// Objects
const obj = { name: "objectName", type: "objectType" };
const newObj = { ...obj, purpose: "test" };
console.log(newObj);

const objectCopy = { ...obj };
console.log(objectCopy);
