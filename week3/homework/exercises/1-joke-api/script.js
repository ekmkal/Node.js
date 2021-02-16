/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */

const { default: fetch } = require("node-fetch");

async function printChuckNorrisJoke() {
  try {
    const fetchResponse = await fetch('http://api.icndb.com/jokes/random');
    const jsonData = await fetchResponse.json();
    console.log(jsonData.value.joke);
  } catch (err) {
    console.error(err.message);
  };
};

printChuckNorrisJoke();