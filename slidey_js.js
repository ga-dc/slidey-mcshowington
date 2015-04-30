$(document).ready(function(){
  var button = $("button")
  var i = 0;
  var foo = $("#background");
  var input = $("#word");
  var images=["https://i.imgur.com/wcbCIc3b.jpg",
              "https://i.imgur.com/VATK187b.jpg",
              "https://i.imgur.com/VEuk6jTb.jpg",
              "https://i.imgur.com/6hHQCvsb.jpg",
              "https://i.imgur.com/xHvM2i5b.jpg"];

  foo.css("background-image","url(https://i.imgur.com/8C1WXHPb.jpg)");

  input.click(function(){
    foo.css("background-image", "url("+ +")");
    console.log("hay")
  })


    function change(){

      foo.css("background-image","url("+images[i]+")")
      foo.fadeIn(1000);
      i++;
      if(i>4){
        i =0
      }
    };

    setInterval(function(){
      change();
      foo.fadeOut(4000);

    }, 5000)

});
