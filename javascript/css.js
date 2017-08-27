
function fadeInColor(object,attribute,color,time){
    var div = $(object);
    $({alpha:0}).animate({alpha:1}, {
        duration: time,
        step: function(){
            $('.square').css(attribute,'rgba('+color+','+this.alpha+')');
        }
    });
}

function fadeOutColor(object,attribute,color,time){
    var div = $(object);
    $({alpha:1}).animate({alpha:0}, {
        duration: time,
        step: function(){
            $('.square').css(attribute, 'rgba('+color+','+this.alpha+')');
        }
    });

}



