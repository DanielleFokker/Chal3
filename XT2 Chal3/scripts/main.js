// weer API 
function getAPIdata() {

	// construct request
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=e9bf92ff3983614513854cbe5b65e0cc&q=the%20Hague,nl';

	// get current weather
	fetch(request)	
	
	// parse response to JSON format
	.then(function(response) {
		return response.json();
	})
	
	// do something with response
	.then(function(response) {
		// show full JSON object
		console.log(response);
		var weatherBox = document.getElementById('weer');
		weatherBox.innerHTML = response;
		weatherBox.innerHTML = response.weather[0].description;
    weatherBox.innerHTML = response.main.temp;
    weatherBox.innerHTML = response.visibility;

		var degC = Math.floor(response.main.temp - 273.15);
		var weatherBox = document.getElementById('weer');
		weatherBox.innerHTML = degC + '&#176;C <br>';
	});
}

// init data stream
getAPIdata();


// API twee als je weet of je kan landen wil je ook snel aan het bier kan na zo'n lange reis en jaren enkel Mars bier


// function getAPIdata2() {

// 	// construct request
// 	var request = 'https://api.openweathermap.org/data/2.5/weather?appid= ***APIKEY*** &q=the%20Hague,nl';

// 	// get current weather
// 	fetch(request)	
	
// 	// parse response to JSON format
// 	.then(function(response) {
// 		return response.json();
// 	})
	
// 	// do something with response
// 	.then(function(response) {
// 		// show full JSON object
// 		//console.log(response);
// 		var weatherBox = document.getElementById('weather');
// 		//weatherBox.innerHTML = response;
// 		//weatherBox.innerHTML = response.weather[0].description;
// 		//weatherBox.innerHTML = response.main.temp;

// 		// var degC = Math.floor(response.main.temp - 273.15);
// 		// var weatherBox = document.getElementById('weather');
// 		// weatherBox.innerHTML = degC + '&#176;C <br>';
// 	});
// }

// // init data stream
// getAPIdata2();