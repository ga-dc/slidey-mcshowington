$(document).ready(function(){

$("#background");
var images = [
  "http://i.imgur.com/WnkBqTE.gif",
	"http://i.imgur.com/KSWrk.gif",
	"http://i.imgur.com/Bc6pb58.gif",
	"http://i.imgur.com/gqQChS5.gif"];


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
