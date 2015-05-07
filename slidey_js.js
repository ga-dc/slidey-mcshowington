$(document).ready(function(){
	var background = $("#background");
	var input = $("#word");
	var form = $("#user-choice");
	var changing = true;
	var timeOut;

	form.on("submit", function(event){
		event.preventDefault();
		giphyApi();
	});

	$(window).on("click", pause);

	var picsArray = [
	    "http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg",
	    "http://www.foodiggity.com/wp-content/uploads/2013/05/sushi-cats-2.jpeg",
	    "http://breadedcat.com/wp-content/uploads/2012/02/cat-breading-tutorial-004.jpg",
	    "http://i.ytimg.com/vi/j8ZfWJOK450/hqdefault.jpg",
	    "http://images.boomsbeat.com/data/images/full/37630/cat_3-jpg.jpg"
	];

	var linksCounter = 0;

	var changeBackground = function(){
		background.css({
			'background-image':'url(' + picsArray[linksCounter] + ')'
		});
		background.fadeIn();
		if(changing = true){
			timeOut = setTimeout(function(){
				background.fadeOut();
			}, 2500)
		}
		linksCounter++;
		if(linksCounter >= picsArray.length){
			linksCounter = 0;
		}
		changing = true;
	}

	changeBackground();
    var cyclePics = setInterval(changeBackground, 3000);

    function pause(){
    	if(changing){
    		clearInterval(cyclePics);
    		clearTimeout(timeOut);
    		$("#background").stop();
    		$("#background").css({
    			"opacity": "1",
    			"display": "block"
    		});
    		console.log(cyclePics);
    		console.log("working!");
    		changing = false
    	}
    	else {
    		background.fadeOut();
    		setTimeout(function(){
	    		changeBackground();
	    		cyclePics = setInterval(changeBackground, 3000);
	    		console.log("not working!");
	    		changing = true;
			}, 500)
    	}
    }

    var giphyApi = function(){
    	var apiKey = "&api_key=dc6zaTOxFJmzC";
    	var url = "http://api.giphy.com/";
    	var method = "v1/gifs/search";
    	var query = "?q=" + input.val();
    	var xhr = $.get(url + method + query + apiKey)
    	xhr.done(function(data){
    		picsArray = [];
    		for(var i = 0; i < data.data.length; i++){
    			picsArray.push(data.data[i].images.original.url);
    		}
    	});
    }
})













