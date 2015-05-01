//This random select function is only necessary because giffy's public key for their
//random API is disabled due to overuse by our class. I am using this function to help select a
//random item from giffy's image search API, which returns metadata for multiple images.
function selectRandom(array){
	var currentIndex = array.length;
	var randomIndex;
	var temporaryValue;
	while(currentIndex > 0){
		randomIndex   = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue       = array[currentIndex];
		array[currentIndex]  = array[randomIndex];
		array[randomIndex]   = temporaryValue;
	}
	return array[0];
}

function setQuery() {
	//	includes a working, non-throttled giffy API string which returns multiple images.
	//	I will shuffle the results and pick the first item in the resulting array.
	query = "http://api.giphy.com/v1/gifs/search?q="+$("#word").val()+"&api_key=dc6zaTOxFJmzC";
}

function getImg(){
	$.getJSON(query, function(data) {
		var imgUrl = selectRandom(data.data).images.original.url;
		setBackground(imgUrl);
	});
}
function setBackground(imgUrl){
	$("#background").css({backgroundImage: "url('" + imgUrl + "')"}).hide().fadeIn(4000);
}

function changeSlide() {
	$("#background").fadeOut(2000);
	getImg();
}

var query;
$(document).ready(function(){
	setQuery()
	getImg();
	setInterval(changeSlide, 10000);
	$("#word").keydown(function(event) {
		if (event.keyCode === 13) {
			setQuery()
			changeSlide()
		}
	})
})