var images = ["http://i.imgur.com/ze6ZFme.jpg", "http://i.imgur.com/SazaHUq.jpg", "http://i.imgur.com/wcbCIc3.jpg", "http://i.imgur.com/p078e7Q.gifv", "http://i.imgur.com/M48jGJn.jpg", "http://i.imgur.com/6jwKQE9.jpg", "http://i.imgur.com/5cAt7eO.jpg"];
var inputValue = $("#word");
var i = 0;
var currentImage = images[i];

$(document).ready(function () {

  var newPicture = setInterval( function(){

    var interval = $("#interval")[0]

    if (i < images.length) {
      currentImage = images[i];
      i ++;
    } else {
      i = 0;
    }


    if (fade.checked) {
      var background = $("#background").css('background-image', 'url("' + currentImage + '")').fadeIn(parseInt(interval.value) * 600).delay(parseInt(interval.value) * 300).fadeOut(parseInt(interval.value) * 100);
    } else {
      var background = $("#background").css('background-image', 'url("' + currentImage + '")').delay(parseInt(interval.value) * 800).slideDown(parseInt(interval.value) * 200);
    }
  }, interval.value * 1000);

  $("#word").mouseover(function(){
    $("#word").val('click to pause');
  })

  $("#word").click(function(){
    clearInterval(newPicture);
  })

});