

var container = document.getElementById("container1");

var imageWidth ;
var imageHeight;
var xInitial,yInitial;
var containerTopInitial, containerLeftInitial;

var gridWidth = 100;

var enableDrag = false;

    
$(document).ready(function () {
    
    buildGrid();
    //Initialize starting attributes
	container.style.backgroundPositionX = '0px';
	container.style.backgroundPositionY = '0px';
	
	document.onmousedown = mouseDownEvent;
	document.onmousemove = mouseMoveEvent;
    document.onmouseup = mouseReleaseEvent;
    
    //Initialize values
    container.style.position = 'absolute';
    container.style.top = "10px";
    container.style.left = "10px";
    
});


//Determine what happens when the mouse clicked
function mouseDownEvent(e){
    console.log()
    //If we're clicking on the box
	if($(e.target).attr('class') == "box"){
        container = document.getElementById(e.target.id);
        container.style.position = 'absolute';
        $(container).addClass('shadow');
        $(container).css('z-index',10);
        xInitial = e.clientX;
        yInitial = e.clientY;
		//Store initial image location
		containerTopInitial =  $('#' + e.target.id).position().top;
	    containerLeftInitial = $('#' + e.target.id).position().left;
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
		var deltaY = e.clientY - yInitial;
        var deltaX = e.clientX - xInitial;
        container.style.top = containerTopInitial + deltaY + 'px';
        container.style.left = containerLeftInitial + deltaX + 'px';
    }
    
}

//Determine what happens when the mouse button is released
function mouseReleaseEvent(e){
    enableDrag = false;
    snapToGrid(e.target);
    $(container).removeClass('shadow');
    $(container).css('z-index',1);
    return true;
}

function snapToGrid(object){
    nearestMarkerTop = Math.round(parseInt(object.style.top) / gridWidth)*gridWidth;
    nearestMarkerLeft = Math.round(parseInt(object.style.left) / gridWidth)*gridWidth;
    object.style.top = nearestMarkerTop;
    object.style.left = nearestMarkerLeft;
}


function buildGrid(){
    //Determine numbe of rowsxcolumns based on avaliable screen size
    var rows = Math.ceil($(window).height()/ gridWidth);
    var columns = Math.ceil($(window).width()/ gridWidth);

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