$(document).ready(function(){

  $("#word").bind("enterKey", function(e){
    console.log("enter was pushed");
    //do stuff here
    var searchTerm = $("input#word").val();
    var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=pg&limit=10&q=" + searchTerm;
    console.log(url);
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      console.log(response.data[0].images.original.url);
      for (var i =0; i < 10; i++){
        setInterval(function(){
          console.log("works");
          $("div#background").css("background-image", "url(" + response.data[i].images.original.url+ ")");
        }, 6000);
        }
    }).fail(function(response){
      console.log("fail");
    }) //end of fail promise


    var urlUD = "http://rhymebrain.com/talk?function=getRhymes&word=" + searchTerm;
    $.ajax({
      url: urlUD,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      $("div#rhyming").css("visibility", "visible");
      $("div#rhyming").empty();
      $("div#rhyming").append("<h2> Rhyme that Word! </h2>");
      for (var i =0; i <5; i++){
      console.log(response[i].word);
      $("div#rhyming").append("<p>" + response[i].word + "</p>");
    }
    }).fail(function(){
      console.log("fail");
    })



  }) // end of .bind
  $("#word").keyup(function(e){
    if(e.keyCode == 13)
    {
      $(this).trigger("enterKey");
    }
  }) // end of .keyup











}) // end of document ready function
