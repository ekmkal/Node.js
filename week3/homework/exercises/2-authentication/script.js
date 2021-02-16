
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */

const { default : fetch } = require('node-fetch');

async function printBooks() {
  const endpoint = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
  const baseEncode = 'YWRtaW46aHZnWDhLbFZFYQ==';

  try {
    const fetchResponse = await fetch(endpoint, {
      headers : { 'Authorization': `Basic ${baseEncode}` }
    });
  
    const jsonData = await fetchResponse.json();

    console.log(jsonData);
  } catch (err) {
    console.error(err.message);
  };
};

printBooks();