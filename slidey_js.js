imageArray = [
  "http://i.imgur.com/cRNatUJ.jpg?1",
  "http://i.imgur.com/ks65htO.jpg",
  "http://i.imgur.com/i56JLpa.jpg",
  "http://i.imgur.com/AwP7YfE.jpg",
  "http://i.imgur.com/VU7jp9I.jpg"
]
//
$(document).ready(function(){
  var background = $("#background")
  var index = 0;
  var changeBackground = setInterval(change, 5000);

  function change(){
    backgroundImage = "url('" + imageArray[index] + "')"
    background.css ({ "background-image": backgroundImage,
    "height": "100%;"})

    index++

    if(index == 5){
      index = 0
    }

  }


});
