//Variables

//
// var imgs = [ "http://i.imgur.com/VEuk6jT.jpg", "http://i.imgur.com/yjrcyWI.jpg","http://i.imgur.com/7YuFHUU.jpg"]



$( document ).ready(function() {

  // var imageId = document.getElementById('background')
//create an array with all my images
  var imgs = ["http://i.imgur.com/VEuk6jT.jpg","http://i.imgur.com/yjrcyWI.jpg", "http://i.imgur.com/QRLrFGJ.jpg","http://i.imgur.com/VATK187.jpg", "http://i.imgur.com/5LHPAuk.jpg"];

// Time
  var counter = 0

      results = setInterval(function(){
      $('#background').css('background-image', 'url(' + imgs[counter] + ')');
      // $('#background').fadeIn();
      counter++;
      if (counter === imgs.length) {
          counter = 0
      }

      }, 500);



    });
