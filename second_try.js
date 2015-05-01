var searchTerm;
var currentBackgroundNumber = 1;
var currentBackground;
var transitionTime = 0.5;
var slideshowInterval;

function setSearchTerm(){
  searchTerm = $('#word').val();
}

function startSlideShow(){
  var giphyURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + searchTerm
  $.getJSON(giphyURL, setBackground);
}

function changeBackgroundNumber(){
  if (currentBackgroundNumber === 1) {
    currentBackgroundNumber = 2;
  } else{
    currentBackgroundNumber = 1;
  };
}

function setBackground(randomGiphy){
  var backgroundGif = randomGiphy['data']['image_url'];
  currentBackground = '#background' + currentBackgroundNumber;
  $(currentBackground).css('background-image', 'url(' + backgroundGif + ')');
  if (currentBackgroundNumber === 1) {
    $(currentBackground).animate({
      opacity: 1
    },
    {
      duration: transitionTime * 1000
    });
  } else{
    $('#background1').animate({
      opacity: 0
    },
    {
      duration: transitionTime * 1000
    })
  };
  changeBackgroundNumber();
}

$('document').ready(function(){
  setSearchTerm();
  slideshowInterval = setInterval(startSlideShow, 5000);

  $("#word").keydown(function(pressed){
    if(pressed.keyCode === 13){
      setSearchTerm();
      clearInterval(slideshowInterval);
      slideshowInterval = setInterval(startSlideShow, 5000);
    }
  });

  $('#stop').click(function(){
    clearInterval(slideshowInterval);
  });
});