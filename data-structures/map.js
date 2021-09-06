"strict mode";

const openingHours = {
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
};

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(true, "We are closed");

console.log(rest);

console.log(rest.get("name"));
console.log(rest.get(true));

console.log(rest.has(true));

rest.delete(2);
console.log(rest);

console.log(rest.size);

//rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");

console.log(rest);

console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programming language in the world "],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question);

// Convert object to a Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}

//const answer = Number(prompt("Your answer"));
const answer = 3;

console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log(...question);

console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
