"strict mode";

const objectExample = {
  name: "ObjectName",
  number: 2,
  description: function () {
    return this.name + this.number;
  },
};

console.log(objectExample.description());

console.log(objectExample.name);

console.log(objectExample["name"]);
