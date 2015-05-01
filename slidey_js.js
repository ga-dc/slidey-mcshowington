
//$.ajax({	I SOOOOOO WANTED TO USE THIS AJAX API METHOD}


$(document).ready(function(){
	$('#background');
	$('#inputs');
	// $("div").fadeIN(8000);
	// $('div').fadeIn(8000);
	// $('#background').fadeOut( "slow", function() {
  // });
	// var imageObjects
	var images = ["http://s3.amazonaws.com/giphygifs/media/QWKspPE4Ehtra/giphy.gif",
	"http://s3.amazonaws.com/giphygifs/media/Gd4u3DyNOfBIY/giphy.gif",
	"http://s3.amazonaws.com/giphygifs/media/UPZmouvx4SGha/giphy.gif"]
	// 'http://giphy.com/gifs/wasted-backflip-WqKtj6qDvmuYw.gif'];
	// $("div").append('<img id="image_url" src="http://s3.amazonaws.com/giphygifs/media/Gd4u3DyNOfBIY/giphy.gif" />')
	// $("div").append('<img id="image_url" src="http://s3.amazonaws.com/giphygifs/media/QWKspPE4Ehtra/giphy.gif" />')
	// $("div").append('<img id="image_url" src="http://giphy.com/gifs/wasted-backflip-WqKtj6qDvmuYw.gif"/>')
	// var response_hash = jQuery.parseJSON(( '{ "id": "Gd4u3DyNOfBIY" }' );)
	// var image_url = var response_hash
	// var currentPosition = 0;
	// var slideWidth = 500;
	// var slides = $('#background');
	// var numberOfSlides = slides.length;
	// function moveImg(){

	var imageNumber = 0;


	var changeBackground = function(){
    $("#background").css("background-image", "url(" + images[imageNumber] + ")").fadeIn(2000);
    imageNumber++;
    if (imageNumber >= images.length){
        imageNumber = 0;
    }
}
// }
	setInterval(changeBackground, 6400);


	// }
	// $.ajax({	
 //    url: "http://api.giphy.com/v1/gifs/search?q=wasted+gta&api_key=dc6zaTOxFJmzC",
 //    dataType: 'json',
	// success: function(results){
	// 	console.log(results)
	// 	}
	// })
	// 	$.each(json.results, function(data,url){
	// 		   $("#background").append('background-image'), "url(" + imageObjects[imageNumber] + ")") = results
	// 		})
	// 	}
	// });
});

// })

// window.setInterval(function(){
// 	moveImg(autoIndex++);
