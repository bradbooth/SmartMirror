//Travel
//var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=375+Cook+Rd,+North+York,+ON+M3J+3T6&destinations=8200+Warden+Ave&key=AIzaSyCxHlHrdOwJGnPpYgmZHO_grGeCHtcrmo4&avoid=tolls';



function updateTravelTime(){
	var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=375+Cook+Rd,+North+York,+ON+M3J+3T6&destinations=8200+Warden+Ave&key=AIzaSyCxHlHrdOwJGnPpYgmZHO_grGeCHtcrmo4&avoid=tolls';

	var xhr = createCORSRequest('GET', url);
	if (!xhr) {
		alert('CORS not supported');
		return;
	}

	xhr.onload = function() {
		var xhrResponse = xhr.response;
		var responseJSON = JSON.parse(xhrResponse);
		var timeToDestination = responseJSON.rows[0].elements[0].duration.text;
		document.getElementById("travelTime").innerHTML = timeToDestination + " to work.";
	};

	xhr.onerror = function() {
		console.log('Error loading Google Maps API.');
	};

	xhr.send();
}


//https://www.html5rocks.com/en/tutorials/cors/
// Create the XHR object.
function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		// XDomainRequest for IE.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		// CORS not supported.
		xhr = null;
	}
	return xhr;
}

