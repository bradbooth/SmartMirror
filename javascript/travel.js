//Travel
url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=226 St Joan of Arc Ave, Maple, ON L6A 3C1&destinations=8200+Warden+Ave&key=AIzaSyCxHlHrdOwJGnPpYgmZHO_grGeCHtcrmo4&avoid=tolls',

$(document).ready(function () {
	updateTravelTime();
});

function updateTravelTime(){

		$.getJSON(url,function (data) { 
			var timeToDestination = data.rows[0].elements[0].duration.text
			document.getElementById("travelTime").innerHTML = "It will take " + timeToDestination + " to get to work."; 
		});
}