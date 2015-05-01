var images = ["http://i.imgur.com/toiWjkX.jpg?1", "http://i.imgur.com/lvUZZ5h.jpg", "http://i.imgur.com/lN5Xj7Z.jpg", "http://i.imgur.com/Uiq53lr.jpg", "http://i.imgur.com/ogXWnCM.jpg", "http://i.imgur.com/QOgvT7o.jpg", "http://i.imgur.com/ODjDt.jpg", "http://i.imgur.com/0qJQV.jpg", "http://i.imgur.com/rlT9q.jpg"]
var interval;
var currentPic = 0;


$(document).ready(function () {

  var loopPics = function() {

    interval = setInterval(setPics, 5000);
  }

  var setPics = function() {
    startOver();
    
    $("#background").css("background-image", "url('" + images[currentPic++] + "')");
    $("#background").fadeIn(1000).delay(3000);
    $("#background").fadeOut(1000);
  }

    loopPics();

    var startOver = function() {
      if (currentPic < images.length) {
        currentPic;
      }else {
        currentPic = 0;
      }
    }


  var pauseShow = function() {
    $("#background").click(function() {
      $("#background").css("background-image", "url('" + images[currentPic] + "')");
      clearInterval(interval);
      });
  }


    pauseShow();

});
