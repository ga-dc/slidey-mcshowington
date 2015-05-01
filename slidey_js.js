
var i = 0;
var arrayPictures = ["http://imgur.com/gallery/R2rNVh6","http://imgur.com/gallery/pJlBJCU","http://imgur.com/gallery/bytheWT","http://imgur.com/gallery/YAZxVlq","http://imgur.com/gallery/z1mjC9p"];

function startSlide(){
  // $("#backgroud").css('background','url(' + arrayPictures[i] + ')');
  $("#backgroud").css('background','url('+arrayPictures[i]+')').fadeOut("slow");
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
