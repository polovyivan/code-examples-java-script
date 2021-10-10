// fetch(`https://api.publicapis.org/entries`)
//   .then((response) => {
//     // (err) => alert(err)
//     if (!response.ok) {
//       throw new Error(`Entries not found ${response.status}`);
//     }
//     return response.json();
//   })
//   .catch((err) => {
//     console.log(err);
//     renderError(`Something went wrong ${err.message}`);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// // example function
// const getJSON = function (url, errorMessage = "Something went wrong") {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//       throw new Error(`${errorMessage} (${response.status})`);
//     }
//     return response.json();
//   });
// };

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening!");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN $$$");
    }
    reject(new Error("You lost your money"));
  }, 2000);
});
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// Promisify setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 seconds"));

//
Promise.resolve("Resolves immediately").then((x) => console.log(x));
Promise.resolve(new Error("Rejects immediately")).catch((x) => console.log(x));

// Promise.race
// Get only one result, the one that salted (with 200 or 400) first.
(async function () {
  const res = await new Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("request took to long!"));
    }, sec * 1000);
  });
};
// To prevent long fetch
Promise.race([
  getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
  timeout(1),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.log(err));

//Promise.allSettled - return all results rejected and fulfilled
Promise.allSettled(
  [Promise.resolve("Success")],
  Promise.reject("Error"),
  Promise.resolve("Success")
).then((res) => console.log(res));

//Promise.any - return first fulfilled promises and ignore rejected
Promise.any(
  [Promise.resolve("Success")],
  Promise.reject("Error"),
  Promise.resolve("Success")
).then((res) => console.log(res));
