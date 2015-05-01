$(document).ready(function(){
  var url = " "
  var button = $("button");
  var i = 0;
  var foo = $("#background");
  var input = $("#word");
  // var images=["https://i.imgur.com/wcbCIc3b.jpg",
  //             "https://i.imgur.com/VATK187b.jpg",
  //             "https://i.imgur.com/VEuk6jTb.jpg",
  //             "https://i.imgur.com/6hHQCvsb.jpg",
  //             "https://i.imgur.com/xHvM2i5b.jpg"];



  foo.css("background-image","url(http://media2.giphy.com/media/VgJ7V2O0voODm/giphy.gif)");



  input.focus(function(){
    var userInput = input.val().split(" ").join("+");
    var xhr =$.get("http://api.giphy.com/v1/gifs/search?q="+userInput+"&api_key=dc6zaTOxFJmzC&limit=5");
      xhr.done(function(data) { console.log("success got data", data);
      console.log("url here")
      url = data.data[3].images.original.url;
    });
    foo.css("background-image", "url("+ url+")");
    console.log("hay");
  })



  // function change(){
  //   foo.css("background-image","url("+images[i]+")")
  //   foo.fadeIn(1000);
  //   i++;
  //     if(i>4){
  //         i =0
  //       }
  //   };
  //
  //   var int = setInterval(function(){
  //               change();
  //               foo.fadeOut(4000);
  //             }, 5000)

    button.click(function(){
      clearInterval(int);
      console.log("hay");
    });



});
