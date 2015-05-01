$(document).ready(function(){

images = ["http://i.imgur.com/gmLyvbp.jpg", "http://i.imgur.com/tL55PPP.jpg", "http://i.imgur.com/ntuo5zU.jpg", "http://i.imgur.com/hYK4gEX.jpg", "http://i.imgur.com/CH2fQyB.jpg", "http://i.imgur.com/uO8nSk1.jpg"];
back= $("#background");
num = 0;

setInterval(function(){
	back.css({
		"background-image": "url('"+ images[num] + "')",
		"background-size": "80% 80%"
	}).fadeIn(600).delay(3800).fadeOut(600);
	num += 1;
	if (num === images.length) {
		num = 0;
	}
},5000);

});