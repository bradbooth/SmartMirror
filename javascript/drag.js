
var imageWidth ;
var imageHeight;
var xInitial,yInitial;
var containerTopInitial, containerLeftInitial;

var enableDrag = false;

    
$(document).ready(function () {

    counter = 0;
    $('.box').each(function(i, obj) {
        obj.style.top = counter + "px";
        obj.style.left = "0px";
        counter = counter + gridWidth * 3;
    });
    //Initialize starting attributes
	
	document.onmousedown = mouseDownEvent;
	document.onmousemove = mouseMoveEvent;
    document.onmouseup = mouseReleaseEvent;
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
        $('.square').css("outline-color","#1F1F1F");
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
    $('.square').css("outline-color","#000000");
    return true;
}

function snapToGrid(object){
    nearestMarkerTop = Math.round(parseInt(object.style.top) / gridWidth)*gridWidth;
    nearestMarkerLeft = Math.round(parseInt(object.style.left) / gridWidth)*gridWidth;
    object.style.top = nearestMarkerTop;
    object.style.left = nearestMarkerLeft;
}
