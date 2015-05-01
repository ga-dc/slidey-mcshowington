$( document ).ready(function(){

//Iteration 1

  // var images = ["http://upload.wikimedia.org/wikipedia/commons/e/ec/Pinus_densiflora_Kumgangsan.jpg",
  // "https://www.petfinder.com/wp-content/uploads/2012/11/dog-how-to-select-your-new-best-friend-thinkstock99062463.jpg",
  // "http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg"];
  //
  // i = 1;
  // function displayImages (){
  //   if (i === images.length){
  //     i = 0;
  //   };
  //   $("#background").css("background-image", "url(" + images[i] + ")");
  //   i++;
  // };
  // setInterval(displayImages, 3000);

//Iteration 2

  function displayGif(){
    var giphyAPI = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
    $.getJSON(giphyAPI, function(json){
      var url = json.data.image_original_url;
      $("#background").css("background-image", "url(" + url + ")");
    });
  };
  setInterval(displayGif, 5000);

});
