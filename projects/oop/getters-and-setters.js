"strict mode";

// Getters and setters work the same way for classes

const account = {
  owner: "Ivan",
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  // has to have exactly one argument
  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest); // don´t need to use () with latest

// setter method call
account.latest = 50;
console.log(account.latest);
