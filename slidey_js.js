$(document).ready(function(){ });

var imageSpace = document.getElementById("background");
var imageCollection = ["http://i.imgur.com/oq98hTA.jpg", "http://i.imgur.com/Sl8CPMP.jpg", "http://i.imgur.com/hG9Xb.jpg", "http://i.imgur.com/GYEse.jpg", "http://i.imgur.com/ndDhksZ.jpg"];
// var random = Math.floor(Math.random() * 4);
// console.log(random);
i = 0;

function backgroundImage(){
	imageAmount();
	$("#background").css('background-image', 'url(' + imageCollection[i] + ')');
	i++;
}

var imageMovement = setInterval(function () {
		backgroundImage();
	}, 1000);

function imageAmount(){
	if(i >= imageCollection.length){
		i = 0;
	}
}

function backgroundFadeIn(){
	$("#background").fadeIn(4000);
}

function backgroundFadeOut(){
	$("#background").fadeOut(4000);
}

function stopShow(){ setTimeout(function () {
			clearInterval(imageMovement);
	}, 1000);}

// $(".stop").click(stopShow());

// function backgroundImage(){
// 	setInterval(function(){
// 	jQuery.each( imageCollection, function( i, val ) {
// 		$("#background").css('background-image', 'url(' + val + ')').fadeIn(4000);
// 		console.log(i+ ":" + val);
// 	});
// }, 1000);
// }
