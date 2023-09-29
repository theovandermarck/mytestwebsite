logh = document.getElementById("longitudeGoHere")
// lagh = document.getElementById("latitudeGoHere")
fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then(response => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    // Process the response data here
    logh.innerHTML="Longitude: "+data["longitude"]+"; Latitude: " + data["latitude"];
  })
  .catch(error => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
  });