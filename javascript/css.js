
function fadeColor(object,attribute,color,opacityBegin,opacityEnd,time){
    var div = $(object);
    $({alpha:opacityBegin}).animate({alpha:opacityEnd}, {
        duration: time,
        step: function(){
            div.css(attribute, 'rgba('+color+','+this.alpha+')');
        }
    });
}

