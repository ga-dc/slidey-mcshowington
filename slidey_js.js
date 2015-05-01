$(document).ready(function(){
  var images = [
  "url('http://i.imgur.com/KHkYAuT.jpg')",
  "url('http://i.imgur.com/I5G6HaZ.jpg')",
  "url('http://i.imgur.com/tF4lJR4.jpg')",
  "url('http://i.imgur.com/cDjqQO6.jpg')",
  "url('http://i.imgur.com/wDT622c.jpg')",
  "url('http://i.imgur.com/pwXb7YX.jpg')"];
  var background = $("#background");
  var inputValue = $("input").val()

  window.setInterval(setBackground, 1000);

  function setBackground() {
    background.css({
      "background-image": callImage()
    });    
  }

  function callImage(){
    var random = Math.ceil(Math.random() * images.length);
    var image = images[random];
    return image
    // var apiEndpoint = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="
    // var apiKey = "&api_key=dc6zaTOxFJmzC"
    // var apiLink = apiEndpoint + inputValue + apiKey;
    // jsonData = $.getJSON(apiLink);
    // embedUrl = jsonData["responseJSON"]["data"][0]["embed_url"]
    // var gifURL = "url('" + embedUrl + "')"

    return gifURL
  };
});











