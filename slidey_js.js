$(document).ready(function(){
  var images = [
    "url('http://i.imgur.com/KHkYAuT.jpg')",
    "url('http://i.imgur.com/I5G6HaZ.jpg')",
    "url('http://i.imgur.com/tF4lJR4.jpg')",
    "url('http://i.imgur.com/cDjqQO6.jpg')",
    "url('http://i.imgur.com/wDT622c.jpg')",
    "url('http://i.imgur.com/pwXb7YX.jpg')"];
  var background = $("#background");
  // var inputValue = $("input").val()

  var intervalID = window.setInterval(setBackground, 1000);

  function setBackground() {
    background.css({
      "background-image": callImage()
    });    
  }

  function callImage(){
    var random = Math.ceil(Math.random() * images.length);
    var image = images[random];
    return image
  };
});