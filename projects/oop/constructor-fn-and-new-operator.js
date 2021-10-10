"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this - create method in a construction function. Bad for performance
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const ivan = new Person("Ivan", 1984);

console.log(ivan);

// 1. New empty object is created

// 2. A function is called, this = {}

// 3. {} linked to prototype

// 4. function automatically returns {} from this function

const miguel = new Person("Miguel", 2017);

console.log(ivan instanceof Person);
