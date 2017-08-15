function updateTime(){

		var current = new Date();
		var hours = current.getHours();
		var minutes = current.getMinutes().toString();
		var seconds = current.getSeconds().toString();
		

		if(hours <= 12){
			
			document.getElementById("am").style.color = "white";
			document.getElementById("pm").style.color = "gray";
		}

		if(hours > 12){
			hours = hours - 12;
			document.getElementById("am").style.color = "gray";
			document.getElementById("pm").style.color = "white";
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
