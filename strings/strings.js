"strict mode";

const airline = "TAP Air Portugal";
const plane = "A320";

// Get first letter
console.log(plane[0]);
console.log(plane[1]);
console.log("B737"[1]);

console.log("B737".length);

// Methods
// get first occurance position
console.log(airline.indexOf("r"));

// get last occurance position
console.log(airline.lastIndexOf("r"));

//case sencetive
console.log(airline.indexOf("Portugal"));

// Get substring
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));

// Slice backward Portug - al
console.log(airline.slice(-2));

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

// trim string
console.log(" test \n".trim());
console.log(" test \n".trimStart());
console.log(" test \n".trimEnd());

// replacing
const priceGB = "288,97";
const priceUS = priceGB.replace(",", ".");
console.log(priceUS);

const announsment =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announsment.replace("door", "gate"));
console.log(announsment.replaceAll("door", "gate"));
console.log(announsment.replaceAll(/door/g, "gate"));

// Booleans
const plane2 = "A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("Boeing"));
console.log(plane2.startsWith("A"));
console.log(plane2.endsWith("o"));

// Split string based on a divider
const arr = "a+very+nice+string".split("+");
console.log(arr);

// Join strings
const joinedString = ["Mr.", "Ivan", "Polovyi"].join(" ");
console.log(joinedString);

//Padding
console.log("message".padStart(25, "+"));
console.log("message".padEnd(25, "+"));

// Repeat
const message2 = "Bad waether ... All Departues Delayed...\n";
console.log(message2.repeat(5));
