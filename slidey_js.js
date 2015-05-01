$(document).ready( function (){
	var counter = 0
	var isItPlaying = 0;


	var pictures = 	["http://media.giphy.com/media/4Lyd8tJk410iI/giphy.gif", 
						 			"http://media.giphy.com/media/Eq5pb4dR4DJQc/giphy.gif",
						 			"http://media.giphy.com/media/xTiTnLU92F57KAyTio/giphy.gif",
						 			"http://media.giphy.com/media/tQIpLoOSHljJ6/giphy.gif"]



	var backgroundChange = function(){

		$("#background").css('background-image', 'url("' + pictures[counter] + '")');
		counter ++;
		if (counter >= pictures.length){
			counter = 0;
		}
	}

	backgroundChange();
	var timer = setInterval(backgroundChange, 1000);

	$("#background").on("click", function(){
		clearInterval(timer);
	});

})

// $("#background").css part is a getter method (.css) and it's grabbing background-image from the html
// which is currently an empty url)


// window.setInterval(function(){
// var pictures = 	["http://media.giphy.com/media/4Lyd8tJk410iI/giphy.gif", 
// 						 "http://media.giphy.com/media/Eq5pb4dR4DJQc/giphy.gif",
// 						 "http://media.giphy.com/media/xTiTnLU92F57KAyTio/giphy.gif"]

// 		$("#background").css('background-image', 'url("' + pictures[counter] + '")');
// 				counter ++;
// 				if (counter === pictures.length){
// 					counter = 0 
// 				}
// 				}, 5000);

// OR

// $(document).ready( function (){
// var counter = 0
// var pictures = 	["http://media.giphy.com/media/4Lyd8tJk410iI/giphy.gif", 
// 						 "http://media.giphy.com/media/Eq5pb4dR4DJQc/giphy.gif",
// 						 "http://media.giphy.com/media/xTiTnLU92F57KAyTio/giphy.gif"]

// var startSlides = function(){
// 	$("#background").fadeOut(2000, function(){
// 		$(this).css('background-image', 'url()')
// 		backgroundChange()
// 		});

// }

// var backgroundChange = function(){

// 		$("#background").css('background-image', 'url("' + pictures[counter] + '")').fadeIn(2000);
// 				counter ++;
// 				if (counter >= pictures.length){
// 					counter = 0;
// 				}
// 		}

// 		var cycle = setInterval(backgroundChange, 5000)


// })









