/* https://stackoverflow.com/questions/32604460/xmlhttprequest-module-not-defined-found */
const XMLHttpRequest = require("xhr2");

// function to handle success
function success() {
  console.log(JSON.parse(this.responseText));
}

// function to handle error
function error(err) {
  console.log("Request Failed", err); //error details will be in the "err" object
}

const xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error; // call error function if request failed
xhr.open("GET", "https://api.github.com/users/manishmshiva"); // open a GET request
xhr.send(); // send the request to the server.
