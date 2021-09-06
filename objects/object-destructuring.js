"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// rename variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default value (if value does not exist)
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutatung variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Deconstructed object as a function parameter
function orderDelivery({ starterIndex = 1, mainIndex, time, address }) {
  console.log(starterIndex, mainIndex, time, address);
}

orderDelivery({
  time: "22:30",
  address: "Vila del Sole, 21",
  mainIndex: 2,
  //starterIndex: 2,
});
