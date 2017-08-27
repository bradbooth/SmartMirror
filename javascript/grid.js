
var gridWidth = 25;

$(document).ready(function () {
    
    buildGrid();
    
});

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