//Travel

function updateTravelTime(){

			$.ajax({
			url: 'https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=226 St Joan of Arc Ave, Maple, ON L6A 3C1&destinations=8200+Warden+Ave&key=AIzaSyCxHlHrdOwJGnPpYgmZHO_grGeCHtcrmo4&avoid=tolls',
			//url: 'http://www.google.com',
			dataType: 'json',
			type: 'get',
			cache: true,
			success: function(data){
				
				var timeToDestination = data.rows[0].elements[0].duration.text
				document.getElementById("travelTime").innerHTML = "It will take " + timeToDestination + " to get to work.";
			}
		})

}