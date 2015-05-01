function doEverything(){
  var searchBox = $("#word");
  var giphyURL = '';
  var gifSet = [];

  searchBox.keydown(function(event){
    gifSet = [];
    if ( event.which == 13 ) {
      giphyURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + searchBox.val();
      for (var i = 0; i < 5; i++) {
        $.getJSON(giphyURL, function(data){
          gifSet.push(data['data']["image_original_url"]);
        })
      }
      console.log(gifSet);
    }
  });

  function slideshow(){
    var i = -1;
    window.setInterval(function(){
      if(i === gifSet.length - 1){
        i = 0;
      } else {
        i++;
      };
      $('#background').css('background-image', 'url(' + gifSet[i] + ')')
    }, 5000);
  }

  slideshow();
}

$(document).ready(doEverything);
