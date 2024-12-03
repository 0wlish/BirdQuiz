// Specify the API endpoint for user data
const apiURL = '/server';

var request = new Request(apiURL);

/*

// Make a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(userData => {
    // Process the retrieved user data
    console.log('User Data:', userData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  */
 /*
function getData() {
  fetch(request)
  .then(response => {
    console.log("response: " + response.status);
    console.log("url: " + response.url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    console.log(response.json());
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
} */

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    console.log(myObj);
  };
  xmlhttp.open("GET", "/server/test.json");
  xmlhttp.send();