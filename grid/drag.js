

var container = document.getElementById("container");

var imageWidth ;
var imageHeight;
var xInitial,yInitial;
var containerTopInitial, containerLeftInitial;

var gridWidth = 100;

var enableDrag = false;


window.onload = function() {
	
	//Initialize starting attributes of picture
	container.style.backgroundPositionX = '0px';
	container.style.backgroundPositionY = '0px';
	
	document.onmousedown = mouseDownEvent;
	document.onmousemove = mouseMoveEvent;
    document.onmouseup = mouseReleaseEvent;
    
    //Initialize values
    container.style.position = 'absolute';
    container.style.top = "10px";
    container.style.left = "10px";
}

//Determine what happens when the mouse clicked
function mouseDownEvent(e){

    //If we're clicking on the box
	if(e.target.id == "container"){
        //console.log("Clicked on box");
        xInitial = e.clientX;
        yInitial = e.clientY;
		//Store initial image location
		containerTopInitial = parseInt(container.style.top);
	    containerLeftInitial = parseInt(container.style.left);
		enableDrag = true;
		return false;
	}else{
		//Otherwise if we arent in the draggable area handle it with the browser normally
		return true;
	}
}

//Determine what happens when the mouse is moving
function mouseMoveEvent(e){

	//If drag is enabled, move the image as the cursor moves
	if(enableDrag){
		var deltaY = e.clientY - yInitial;//Calculate the change in y coordinates
        var deltaX = e.clientX - xInitial;//Calculate the change in x coordinates
        container.style.top = containerTopInitial + deltaY + 'px';
        container.style.left = containerLeftInitial + deltaX + 'px';
    }
    
}

//Determine what happens when the mouse button is released
function mouseReleaseEvent(e){
    enableDrag = false;
    snapToGrid(e.target);


    return true;
    
}

function snapToGrid(object){
    //Grid marker every X px
    gridMarker = 100;
    nearestMarkerTop = Math.round(parseInt(object.style.top) / gridMarker)*gridMarker;
    nearestMarkerLeft = Math.round(parseInt(object.style.left) / gridMarker)*gridMarker;
    object.style.top = nearestMarkerTop;
    object.style.left = nearestMarkerLeft;
}


    
$(document).ready(function () {

    buildGrid();



});

function buildGrid(){
    //Grid
    
    var rows = Math.floor($(window).height()/ gridWidth);
    var columns = Math.floor($(window).width()/ gridWidth);
    var $row = $("<div />", {class: 'row'});
    var $square = $("<div />", {class: 'square'});

    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#gridWrapper").append($row.clone());
    }

    

}