$(document).ready( function() {

  // If the Giphy API is not working from wherever you're grading this project,
  // uncomment out the below array and the random number generator further down.
  // You'll also need to change the variable on line 44 from response.responseJSON...
  // to images[random].
  //
  //
  // var images = [
  //   "http://media.giphy.com/media/YLNshs01VYktq/giphy.gif",
  //   "http://media.giphy.com/media/ClsNWtQIal14c/giphy.gif",
  //   "http://media.giphy.com/media/47hWogQ3tjW9i/giphy.gif",
  //   "http://media.giphy.com/media/QPhWqgduVrLRS/giphy.gif",
  //   "http://media.giphy.com/media/aAuw8HqtaabK/giphy.gif"
  // ];


  // API call
  // Problem: when I placed this inside of setInterval, the app would read `response`
  // as undefined.
  response = $.getJSON( "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg&tag=bobs+burgers" );

  backgroundEngage();


  function backgroundEngage() {

    setInterval( function(){

      setBackground( response );

      $("#background").animate({
        "opacity" : 1
      });

      setTimeout( function(){
        $("#background").animate({
          "opacity" : 0
        });
      }, 4740);

    }, 5000);

  }


  function setBackground() {
    // var random = Math.floor(Math.random() * images.length) + 1;
    $("#background").css({
      "background-image" : "url(" + response.responseJSON.data.image_url + ")",     // if you need it: images[random]
      "opacity" : 0
    });
  }

})
