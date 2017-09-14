
var imageWidth ;
var imageHeight;
var xInitial,yInitial;
var containerTopInitial, containerLeftInitial;

var enableDrag = false;

var outlineHighlightColor = '245,245,245' //'61,61,61'
var backgroundHighlightColor = '48, 106, 201'//'48,48,48'
var boxBackgroundHighlightColor = '10, 10, 10'//'48,48,48'
    
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
    //If we're clicking on a box
	if($(e.target).attr('class') == "box"){
        container = document.getElementById(e.target.id);
        container.style.position = 'absolute';
        $(container).addClass('shadow');
        $(container).css('z-index',10);
        xInitial = e.clientX;
        yInitial = e.clientY;
		//Store container location
		containerTopInitial =  $('#' + e.target.id).position().top;
	    containerLeftInitial = $('#' + e.target.id).position().left;
        enableDrag = true;
        //Fade in background and outlines
        fadeColor('.square','outline-color',outlineHighlightColor,0,1,300);
        fadeColor('.square','background',backgroundHighlightColor,0,1,300);
        fadeColor('.box','background-color',boxBackgroundHighlightColor,0,1,300);
        
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
    fadeColor('.square','outline-color',outlineHighlightColor,1,0,300)
    fadeColor('.square','background',backgroundHighlightColor,1,0,300)
    fadeColor('.box','background-color',boxBackgroundHighlightColor,1,0,300);
    //Reset containers to be transparent
    setTimeout(function(){$('.box').css('background-color','rgba(0,0,0,0)')},300);
    
    return true;
}

function snapToGrid(object){
    nearestMarkerTop = Math.round(parseInt(object.style.top) / gridWidth)*gridWidth;
    nearestMarkerLeft = Math.round(parseInt(object.style.left) / gridWidth)*gridWidth;
    object.style.top = nearestMarkerTop;
    object.style.left = nearestMarkerLeft;
}
