const whereAmI = async function (country) {
  try {
    const res = await fetch("https://api.publicapis.org/entries");
    console.log(res);
    // The same as
    // fetch("https://api.publicapis.org/entries").then(res=>console.log(res));
  } catch (err) {
    console.log(err);
  }
};

whereAmI("test");
console.log("FIRST");

const getJSON = function (url, errorMessage = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMessage} (${response.status})`);
    }
    return response.json();
  });
};

// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );

    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (error) {
    console.log(error);
  }
};

get3Countries("portugal", "canada", "tanzania");
