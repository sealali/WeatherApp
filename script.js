const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/24.98%2C%2067.28?unitGroup=metric&key=2EA5D5K697FT2HG9ZQXNC427G&contentType=json';
var data;
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
