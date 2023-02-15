const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "FpYYN/JIGi1lIt+JKOLnwg==rS2fJBedO0NI1ZtG";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.ariaDisabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.ariaDisabled = false;
    btnEl.innerText = "Tell Me A Joke";

    //   console.log(data[0].joke);
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    btnEl.ariaDisabled = false;
    jokeEl.innerText = "An error happened, try again later";
    console.log(error);
  }
}
btnEl.addEventListener("click", getJoke);
