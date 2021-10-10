"strict mode";

// Object.create()
// 1. No prototype properties
// 2. No construction function
// 3. No new operator
// 4. Manually set prototype of an object to any other object that we want

const PersonProto = {
  calcAge() {
    console.log(2073 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Create a person object with as PersonProto object a prototype
const ivan = Object.create(PersonProto);
ivan.name = "Ivan";
ivan.birthYear = 1984;
console.log(ivan.__proto__ === PersonProto);

const miguel = Object.create(PersonProto);
miguel.init("Miguel", 2017);
miguel.calcAge();
