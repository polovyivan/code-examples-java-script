"strict mode";

// Static method are attached to the constructor and not to a prototype
// therefore all the arrays do not inherit this method

Array.from([1, 2, 3]); // - works
// [1,2,3].from(); // - wot work

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log("Hey there");
};
Person.hey();

const ivan = new Person("Ivan", 1984);
// ivan.hey(); - wont work

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Static method
  static hey() {
    console.log("Hey there");
  }
}
