
//WEATHER

function updateWeather(){

			$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/forecast?APPID=a9275dcfa95eef6ebc6ad479cfd68028&q=Toronto, CA&units=metric',
			//url: '',
			dataType: 'json',
			type: 'get',
			cache: true,
			success: function(data){

				var city = data.city.name + ', ' + data.city.country;

				var currentTemp = Math.floor(data.list[0].main.temp);
				var currentCondition = data.list[0].weather[0].main;

				//Returns a list of 40 3hr intervals - 8 intervals = 24 hours
				var nextDay1Temp = Math.floor(data.list[8].main.temp);
				var nextDay2Temp = Math.floor(data.list[16].main.temp);
				var nextDay3Temp =  Math.floor(data.list[24].main.temp);

				document.getElementById("curTemp").innerHTML = currentTemp;
				document.getElementById("currentLocation").innerHTML = city;
				document.getElementById("curWeatherIcon").src = "weatherIcons/" + getConditionIcon(currentCondition);

				document.getElementById("nextDay1temp").innerHTML = nextDay1Temp + '&deg;C';
				document.getElementById("nextDay2temp").innerHTML = nextDay2Temp + '&deg;C';
				document.getElementById("nextDay3temp").innerHTML = nextDay3Temp + '&deg;C';		

			}
		})

}


function  getConditionIcon(conditionTxt){

	//Should be case statement


	switch (conditionTxt){
		case 'Thunderstorm':
			return 'Thunderstorm.png'
		case 'Drizzle':
			return 'Drizzle.png'
		case 'Rain':
			return 'Rain.png'
		case 'Snow':
			return 'Snow.png'
		case 'Clear':
			return 'Sun.png'
		case 'Clouds':
			return 'Cloudy.png'
		
	}

}
