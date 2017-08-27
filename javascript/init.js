$(document).ready(function () {

	//TIME
	setInterval("updateTime()", 1000);
	
	//DATE
	updateDate();
	setInterval("updateDate()", 60000);
	
	//WEATHER
	updateWeather();
	setInterval("updateWeather()", 3600000);

	//Travel
	updateTravelTime();
	setInterval("updateTravelTime()", 1800000);

});