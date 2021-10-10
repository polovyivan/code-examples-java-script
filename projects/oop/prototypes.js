"use strict";

// Each and every function automatically has property called prototype
// and that includes a construction functions

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ivan = new Person("Ivan", 1984);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

ivan.calcAge();

console.log(ivan.__proto__);

console.log(Person.prototype.isPrototypeOf(ivan));

// prototype can be think of as prototypeOfLinkedObjects

// Inherited property
Person.prototype.species = "Homo Sapiens";

console.log(ivan.species);

console.log(ivan.hasOwnProperty("species"));

// Own
console.log(ivan.hasOwnProperty("firstName"));

console.log(ivan.__proto__);

// Object.prototype (top of prototype chain)
console.log(ivan.__proto__.__proto__);

console.log(ivan.__proto__.__proto__.__proto__);

// Return the new function
console.log(Person.prototype.constructor);

const arr = [1, 3, 4, 5, 6, 7, 7]; // new Array === [], indeed created with new Array

// Returns all functions of an array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// can create method for ALL arrays (bad practice!!!)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
