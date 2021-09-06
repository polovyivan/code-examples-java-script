"use strict";

// Boolean operators
// Use ANY data type
// Return ANY data type
// Short-circuiting - if first value is true it will be returned

// OR Operator
console.log(3 || "Ivan"); // => 3
console.log("" || "Ivan"); // => Ivan
console.log(true || 0); // => true
console.log(undefined || null); // => null

//const shortCircuitSwitch = 1;
const shortCircuitSwitch = undefined;
const shortCircuit = shortCircuitSwitch || 2;
console.log(shortCircuit);

// AND Operator
console.log(0 && "Ivan"); // => 0
console.log(7 && "Ivan"); // => Ivan

// condition && function call - can replace if statement
