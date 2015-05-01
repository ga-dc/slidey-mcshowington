//create website
//choose soomthing photos
//create needed variables
//set background input images
//make them change from picture to picture

// var switchTime = 4.0;
// var slideSwitcher;


$(document).ready(function(){

  $(#'background');

var images = [
  // "http://i.imgur.com/8C1WXHP.jpg",
  // "http://imgur.com/gallery/rNqnIAA",
  // "http://imgur.com/gallery/5RypSn5",
  "http://i.imgur.com/8OaXnmv.png",
  "http://i.imgur.com/MH0BkpR.jpg",
]

var imageCount = 0;

var changeBackground = function(){
    $("#background").css("background-image", "url(" + images[imageCount] + ")").fadeIn(1000);
    imageCount++;
    if (imageCount >= images.length){
        imageCount = 0;
    }
}



//   form.on("submit", function(event){
//     event.preventDefault();
//     giphyApi();
//   });
//
//
// }
