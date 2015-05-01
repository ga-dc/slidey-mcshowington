
$(document).ready(function(){


var array = ["http://i.imgur.com/h5njfGV.png", "http://i.imgur.com/5LHPAuk.jpg?1", "http://i.imgur.com/cznxgZQ.jpg", "http://i.imgur.com/TpB8OoC.jpg", "http://i.imgur.com/TC4iabU.jpg?1"]

var i = 0

setInterval(function(){
    $("#background").css('background-image', 'url(' + array[i] + ')');
    i++
}, 5000);

//1) grab an image from our array variable

//2) replace the previous image

});
