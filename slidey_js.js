$(document).ready(function(){

backgroundImage = $("#background")

images = [
  "url('http://i.giphy.com/e34HHm5F08FqM.gif')",
  "url('http://i.giphy.com/JzIyZB0fY4dPO.gif')",
  "url('http://i.giphy.com/P62H3xNZL24ow.gif')"
]

imageArray = images[0]

backgroundImage.addEventListener("loadup", backgroundInterval())


function backgroundInterval(){
  window.setInterval(startup, 5000)
};

function startup(){
  // backgroundImage.css({
  //   "background-image": "url('#{images[0] + images}')";
  // })

  for(i in images){
    backgroundImage.css({
      "background-image": "url(" + i + ")"
    })
    // use counter instead
  }
};


// button to make intervals faster
// button to pause slideshow
// input text box to choose seconds of intervals
