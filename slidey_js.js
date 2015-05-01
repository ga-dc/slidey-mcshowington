$(document).ready(function(){

var i = 0;
var arrayPictures = ["http://i.imgur.com/8OaXnmv.png","http://i.imgur.com/z1mjC9p.jpg","http://imgur.com/fR2lRfW?tags","http://imgur.com/pJlBJCU","http://imgur.com/bytheWT","http://imgur.com/YAZxVlq"];

function startSlide(){
  // $("#backgroud").css('background','url(' + arrayPictures[i] + ')');
  $("#background").css('background-image','url('+arrayPictures[i]+')').fadeToggle(2000);
    i++;
    if (i > 5) {
      i = 0;
    }
    // var temp = $("#backgounrd");
    // console.dir(temp);
    // debugger;
  }
startSlide();

  //   box.fadeOut("slow", function() {
  //     alert("box finished fading out");
  //   });

// $('myOjbect').css('background-image', 'url(' + imageUrl + ')');

// http://stackoverflow.com/questions/512054/setting-background-image-using-jquery-css-property

});
