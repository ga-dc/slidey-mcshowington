txtBox = word.val();


$(document).ready(function(){
  var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg&tag=";
  var background = $("#background");
  var word = $("#word");
  function getTxtBox(txtBox){
    // txtBox = word.val();
    console.log(txtBox);
    debugger;
  }
  function setBackground(response) {
    var img = response["data"]["image_url"];
    console.log(img);
    background.css("background-image", "url("+ img +")");
  }
  word.keydown(function(el){
    console.log(el)
    if (el.keyCode === 13) {
      console.log("this works")
      $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
      }).done(function(response){
        getTxtBox(txtBox);
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
