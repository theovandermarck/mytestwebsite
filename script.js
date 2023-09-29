logh = document.getElementById("longitudeGoHere")
// lagh = document.getElementById("latitudeGoHere")
fetch('http://api.open-notify.org/iss-now.json')
  .then(response => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    // Process the response data here
    logh.innerHTML="Longitude: "+data["iss_position"]["longitude"]+"; Latitude: " + data["iss_position"]["latitude"];
  })
  .catch(error => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
  });