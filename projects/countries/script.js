"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data.population);
    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">R${data.region}</h4>
      <p class="country__row"><span>👫</span${(+data.population).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};
// getCountryData("ukraine");
// getCountryData("brasil");

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">R${data.region}</h4>
        <p class="country__row"><span>👫</span${(+data.population).toFixed(
          1
        )}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data.population);

    // Render country1
    renderCountry(data);

    // Get neighbor country 2
    const neighbor = data.borders[2];
    if (!neighbor) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, "neighbour");
    });
  });
};

// getCountryAndNeighbor("ukraine");

// then(successCallback(), failCallBack())

// const getCountryDataWithFetch = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     //fetch(`https://api.publicapis.org/entries`)
//     .then((response) => {
//       // (err) => alert(err)
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
//     })
//     .then(
//       (response) => response.json()
//       //(err) => alert(err)
//     )
//     .then((data) => renderCountry(data, "neighbour"))
//     // catch in any place in the chain
//     .catch((err) => {
//       console.log(err);
//       renderError(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       console.log("finally");
//     });
// };
// getCountryDataWithFetch("ukraine");

const getJSON = function (url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryDataWithFetch = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error(`No neighbour found`);
      return getJSON(
        `https://restcountries.eu/rest/v2/name/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    // catch in any place in the chain
    .catch((err) => {
      console.log(err);
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      console.log("finally");
    });
};
getCountryDataWithFetch("ukraine");
