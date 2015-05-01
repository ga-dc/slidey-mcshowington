$(document).ready(function(){ 

$("#background");
var images = [
	"http://i.imgur.com/K5F20Lc.gif",
	"http://i.imgur.com/mmRRUKD.gif",
	"http://i.imgur.com/XzTwoJe.gif",
	"http://i.imgur.com/6WniqCr.gif",
	"http://i.imgur.com/0sDiNZ4.gif"];


var x = 0;

function changeBackground() {
		$("#background").css( "background-image", "url('" + images[x] + "')" ).fadeIn(2000);
		console.log(images[x]);
		x++;
		if (x === 5) {
			x = 0;
		}
		$("#background").css( "background-image", "url('" + images[x] + "')" ).fadeOut(2000); 
}

var intervalID = window.setInterval(changeBackground, 5000);



});