// 1. Classes are NOT hoisted
// 2. Classes are first class citizens
// 3. Classes are executed in a strict mode

// class ia a special type of a function

// class expression
const PersonClExp = class {};
// class declaration
class PersonCl {
  // has to have a name constructor
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // All methods will be on prototype and not on the object
  calcAge() {
    console.log(2073 - this.birthYear);
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const ivan = new PersonCl("Ivan Polovyi", 1984);
ivan.calcAge();

console.log(ivan.__proto__ === PersonCl.prototype);

//const walter = new PersonCl("WalterDoe", 1965);
const walterWrong = new PersonCl("WalterWrong", 1965);
