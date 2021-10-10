const XMLHttpRequest = require("xhr2");
const request = new XMLHttpRequest();
request.open("GET", `https://api.publicapis.org/entries`);
request.send();

request.addEventListener("load", function () {
  console.log(this.responseText);
});
