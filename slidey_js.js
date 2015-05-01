var images = ["http://i.imgur.com/eRRUGx5.gif", "http://i.imgur.com/IsYBbDe.gif","http://i.imgur.com/8TZ8aXy.gif","http://i.imgur.com/qebtmmW.gif", "http://i.imgur.com/Jn0xMv7.gif"];
var i = 0;


$(document).ready(function(){

  var changeImage = function(){
    if (i < images.length){
      i
    }
    else {
      i=0;
    }
  }

    var changePics = function(){
      changeImage();
      $("#background").css("background-image", "url('"+images[i++]+"')");
      $("#background").fadeIn(1000).delay(4000);
      $("#background").fadeOut(1000);
    }

    var theLoop = function(){
        interval = setInterval(changePics, 6000);

    }
      theLoop();




});
