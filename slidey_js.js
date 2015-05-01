

$(document).ready(function(){

	img = ["http://i.imgur.com/UNDvImp.jpg",
     "http://i.imgur.com/FL1cDRZ.jpg",
     "http://i.imgur.com/WvvpdVO.jpg",
     "http://i.imgur.com/CrrJfqr.jpg",
     "http://i.imgur.com/bToQoi7.jpg"];

	i = 0;

	slideShow = setInterval(function(){
        	// set background img via css
			$("#background").css("background-image", "url("+ img[i] +")");

        	// loop image array
        	i++;
        	if (i === img.length){
        		i = 0;
        	}
        }
        // set interval counter
    	, 5000);
	// stop cycle on click
	$("#background").on("click", function(){
		clearInterval(slideShow);
	// $("#background").on("click", function(){
	// 	slideShow;
	//});
	});

});