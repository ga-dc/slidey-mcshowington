$(document).ready(function(){

var images = ["http://i.imgur.com/wcbCIc3.jpg", "http://i.imgur.com/2tQTR7t.jpg","http://i.imgur.com/ejbGEh2.gif", "http://i.imgur.com/u0tOBYz.jpg", "http://i.imgur.com/VATK187.jpg"];

var backer = $("#background");
i = 0;
var changeImage = function(){
	startOver();
	backer.css("background-image", "url("+ images[i] + ")").fadeIn(600).delay(1800).fadeOut(600); i++;

}

function startImages() {
	interval = setInterval(changeImage, 3000);
}

var startOver = function(){
	if (i >= images.length){
		i = 0;
	}
}

startImages();
});