"use strict";

const shortCircuitSwitch = 0;
const shortCircuit = shortCircuitSwitch || 2;
console.log(shortCircuit); // => 2

// Work with nullish values: null and undefined (NOT 0 or '')
const shortCircuitCorrect = shortCircuitSwitch ?? 2;
console.log(shortCircuitCorrect); // => 0
