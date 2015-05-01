$(document).ready(function() {


var pics = [
"url(http://i.imgur.com/xvQoF0y.jpg)",
"url(http://i.imgur.com/mlJnuBz.jpg)",
"url(http://i.imgur.com/hVfr8sa.jpg)",
"url(http://i.imgur.com/n5C1KCY.jpg)",
"url(http://i.imgur.com/ZcpGF.jpg)"
];

var background = $("#background");
var index = 0;
function changeImage() {
  background.css({"background-image": pics[index]});
  index++
  if (index === 5) {
    index = 0;
  }

};

window.setInterval(changeImage, 500);



});
