// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=paul+rudd&api_key=dc6zaTOxFJmzC&limit=500", true);
// xhr.setRequestHeader('Content-Type', 'text/xml');

// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

//seed of gifs
var funnyDog = '<img id="background" src="http://media.giphy.com/media/ORqwbWpHxjUEo/giphy.gif" />';
var funnyDog2 = '<img id="background" src="http://media.giphy.com/media/OLyqxT26UvPCU/giphy.gif" />';
var funnyDog3 = '<img id="background" src="http://media.giphy.com/media/toBi1QFDo6xAk/giphy.gif" />';
var funnyDog4 = '<img id="background" src="http://media.giphy.com/media/10f7QGbxL51eM0/giphy.gif" />';

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

var giphyPic = function () {
	var url = "http://api.giphy.com/v1/gifs/search?q=paul+rudd&api_key=dc6zaTOxFJmzC&tag=";
	$.getJSON(url + cat );
}


$(document).ready(function(){
    $('#background');
    $('#inputs');

	$("div").append('<img id="background" src="http://media.giphy.com/media/ORqwbWpHxjUEo/giphy.gif" />');

	$("#background").click(function() {
		$("#background").fadeOut(1000, function() {
			$("#background").fadeIn();
		});
	});
});

