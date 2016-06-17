$(document).ready(function(){

  var domStuff = {
    url : "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg&tag=",
    background : $("#background"),
    word : $("#word"),
  }

  function setBackground(response) {
    var img = response["data"]["image_url"];
    domStuff.background.css("background-image", "url("+ img +")");
  }

  function getTxtBox(){
    txtBox = domStuff.word.val();
    console.log(txtBox);
    debugger;
  }

  domStuff.word.keydown(function(el){
    console.log(el)
    if (el.keyCode === 13) {
      console.log("this works")
      $.ajax({
        url: domStuff.url,
        type: "GET",
        dataType: "json",

      }).done(function(response){
        getTxtBox();
        debugger;
        setBackground(response);
        debugger;
        console.log(response);

      }).fail(function(response){
        console.log("Didn't work dude", response);
      });
    }
  });
});
