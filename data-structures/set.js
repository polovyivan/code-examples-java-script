"strict mode";

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);

console.log(new Set("Ivan"));

console.log(orderSet.size);

console.log(orderSet.has("Pizza"));

orderSet.add("Garlic Bread");

console.log(orderSet);

orderSet.delete("Risotto");
console.log(orderSet);

//orderSet.clear();

for (const order of orderSet) console.log(order);
