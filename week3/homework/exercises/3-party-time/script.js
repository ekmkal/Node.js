
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

const { default : fetch } = require('node-fetch');

async function makeReservation() {
  const endpoint = 'https://reservation100-sandbox.mxapps.io/api/reservations';
  
  const reservationDetails = {
    "name": "John Doe",
    "numberOfPeople": 1e5
  };

  try {
    const fetchResponse = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify(reservationDetails),
      headers: { 'Content-Type': 'application/json' }
    });
    const jsonData = await fetchResponse.json();
    
    console.log(jsonData.message);
  } catch (err) {
    console.error(err.message);
  };
};

makeReservation();