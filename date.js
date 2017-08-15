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
		var currentWeekday = weekday[current.getDay()];
		var nextDay1 = weekday[(current.getDay() + 1)%7]
		var nextDay2 = weekday[(current.getDay() + 2)%7]
		var nextDay3 = weekday[(current.getDay() + 3)%7]

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
		var currentMonth = month[current.getMonth()];

		var currentDay = current.getDate();
		abbreviateDate(currentDay);


		document.getElementById("curDate").innerHTML = currentWeekday + ' ' + currentMonth + ' ' + currentDay;
		document.getElementById("nextDay1").innerHTML = nextDay1
		document.getElementById("nextDay2").innerHTML = nextDay2
		document.getElementById("nextDay3").innerHTML = nextDay3

}

function abbreviateDate(date){
	//Appened st, th, nd to date
	//ie. the 1st
		if(date == 1 || date == 21 || date == 31){
			date = date + 'st';
		}
		else if(date == 2 || date == 22){
			date = date + 'nd'
		}
		else if(date == 3 || date == 23){
			date = date + 'rd'
		}
		else{
			date = date + 'th'
		}
		return date;
}