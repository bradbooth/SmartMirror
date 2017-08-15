
//TIME
function updateTime(){

		var current = new Date();
		var hours = current.getHours();
		var minutes = current.getMinutes().toString();
		var seconds = current.getSeconds().toString();
		
		if(hours == 0){
			hours = 12;
		}

		if(hours <= 12){
			

			document.getElementById("am").style.color = "white";
			document.getElementById("pm").style.color = "gray";
		}

		if(hours > 12){
			hours = hours - 12;
			document.getElementById("am").style.color = "gray";
			document.getElementById("pm").style.color = "white";
		}

		if(hours <= 9){
			hours = '0' + hours;
		}

		if(minutes.length == 1){
			minutes = "0" + minutes;
		}

		if(seconds.length == 1){
			seconds = "0" + seconds;
		}

		document.getElementById("hour").innerHTML = hours;
		document.getElementById("minute").innerHTML = ':' + minutes;
		document.getElementById("second").innerHTML = seconds;

	}


//DATE

function updateDate(){

		var current = new Date();

		var weekday = new Array(7);
		weekday[0]=  "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";
		var curWeekday = weekday[current.getDay()];

		var month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";
		var curMonth = month[current.getMonth()];

		var day = current.getDate();
		var curDay;
		if(day == 1 || day == 21 || day == 31){
			curDay = day + 'st';
		}
		else if(day == 2 || day == 22){
			curDay = day + 'nd'
		}
		else if(day == 3 || day == 23){
			curDay = day + 'rd'
		}
		else{
			curDay = day + 'th'
		}

		document.getElementById("curDate").innerHTML = curWeekday + ' ' + curMonth + ' ' + curDay;

}


//WEATHER

function updateWeather(){

			$.ajax({
			url: 'http://api.wunderground.com/api/317ed09107c11160/conditions/forecast/q/canada/Toronto.json',
			//http://api.wunderground.com/api/317ed09107c11160/conditions/forecast/q/canada/Toronto.json
			dataType: 'json',
			type: 'get',
			cache: true,

			success: function(data){
				//Set Current Temperature
				var city = data.current_observation.display_location.full;
				var tempCurrentC = data.forecast.simpleforecast.forecastday[0].high.celsius;
					console.log(data.forecast.simpleforecast.forecastday[0].conditions);
				var conditionS = getConditionIcon(data.forecast.simpleforecast.forecastday[0].conditions);
				document.getElementById("curTemp").innerHTML = tempCurrentC;
				document.getElementById("currentLocation").innerHTML = city;
				document.getElementById("curWeatherIcon").src = "weatherIcons/" + conditionS;

				//Set Forecasted Temperatures and days
				//ND1H - next day 1 high
				//ND1L - next day 1 low
				//dateND1 - date of next day 1
				
				var tempND1H = data.forecast.simpleforecast.forecastday[1].high.celsius;
				//var tempND1L = data.forecast.simpleforecast.forecastday[1].low.celsius;
				var dateND1 = data.forecast.simpleforecast.forecastday[1].date.weekday;
				document.getElementById("tempND1H").innerHTML = tempND1H + '&deg;C';	
				document.getElementById("ND1").innerHTML = dateND1;				

				var tempND2H = data.forecast.simpleforecast.forecastday[2].high.celsius;
				//var tempND2L = data.forecast.simpleforecast.forecastday[2].low.celsius;
				var dateND2 = data.forecast.simpleforecast.forecastday[2].date.weekday;
				document.getElementById("tempND2H").innerHTML = tempND2H + '&deg;C';	
				document.getElementById("ND2").innerHTML = dateND2;	

				var tempND3H = data.forecast.simpleforecast.forecastday[3].high.celsius;
				//var tempND3L = data.forecast.simpleforecast.forecastday[3].low.celsius;
				var dateND3 = data.forecast.simpleforecast.forecastday[3].date.weekday;
				document.getElementById("tempND3H").innerHTML = tempND3H + '&deg;C';	
				document.getElementById("ND3").innerHTML = dateND3;


			}
		})

}


function  getConditionIcon(conditionTxt){

	if(conditionTxt == 'Clear'){
		return 'sunBig.png';
	}

	if(conditionTxt == 'Partly Cloudy'){
		return 'partlyCloudy.png';
	}

	if(conditionTxt == 'Mostly Cloudy'){
		return 'cloudBig.png';
	}

	if(conditionTxt == 'Rain'){
		return 'rainBig.png';
	}

}
