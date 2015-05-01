// Create a webpage, the background of which is a slideshow that cycles through at least 5 different images.


$(document).ready(function(){                // When the HTML page is loaded, treat it as a jQuery object so that we can call jQuery functions on it.
											 // think of jQuery as a REALLY BIG "blueprint" for DOM objects


var backgroundDiv = $("#background");           // Grabbed item from DOM and assigned it to a variable 
var arrayIndex = 0                                // Index as in array index number --> We'll use this to cycle through at a set interval.
var imgArray = ["http://mla-s2-p.mlstatic.com/puzzle-1500-piezas-importado-trefl-stallions-on-the-beach-22427-MLA20229545140_012015-F.jpg",
// "http://typedeck.com/wp-content/uploads/2012/01/837.jpg",
// "http://new.tomatomac.com/data/file/01_free/3a6d4cfa_%C5%C2%BE%E7%B0%E8.jpg",
// "http://www.adaagallery.com/admin/diskfiles/view/71/de01751fc76c9e18410fd0934810e724/71de01751fc76c9e18410fd0934810e724.jpeg",
"https://inalonelyplaceencounterswithfilm.files.wordpress.com/2013/05/lost-in-translation-feature.jpg",
// "http://i.onionstatic.com/onion/8455/original/960.jpg",
// "http://www.kozyndan.com/sites/default/files/imagecache/large/images/Uprisings.jpg",
"http://www.findmyinn.com/wp-content/uploads/2014/09/others-unique-aquarium-design-inspiration-gorgeous-amazing-fish-tanks-design-ideas-915x627.jpg",
// "http://www.elegantweddinginvites.com/wp-content/uploads/2013/05/unique-wedding-photo-ideas.jpg",
"http://illustratd.com/uploads/hghhSZxuVL__1280x867.jpg",
// "http://weandthecolor.com/wp-content/uploads/2013/07/Bird-Lets-appreciate-the-planet-Graphic-Poster-Series-by-jDstyle.jpg", 
// "http://fc03.deviantart.net/fs70/i/2014/238/0/8/sia___breathe_me__cust__cover__by_sparkylightning3-d7wsc8g.png", 
// "http://illustratd.com/uploads/ZahJ83hwh0__1280x854.jpg",
// "http://www.leithpetwerks.com/Cat_images/BQ002_lg.jpg",
// "http://i.onionstatic.com/onion/8499/original/960.jpg",
"http://payload339.cargocollective.com/1/13/428891/9093894/DarkSpring-by-Cocorrina_1000.jpg"]  


imgCycler();														// invoking function imgCycler
var intervalID = setInterval(imgCycler, 3500);
function imgCycler() {                                              // DEFINING function imgCycler   // When defining a function, it's like defining a variable in that you can take the function name and use it in other places (aka INVOKING imgCycler, 2 lines up)
	backgroundDiv.css("background-image", "url(" + imgArray[arrayIndex] + ")");
	arrayIndex++;
	if (arrayIndex >= imgArray.length) {
		arrayIndex = 0;
	}
}


})


// var intervalerThing = setInterval(doThisOverAndOver, 3000)

// function doThisOverAndOver(){
//     This is the stuff I want to repeat.
// }

// var backgroundDiv = $("#background")
//
	// Inside imgCycler function:
	// backgroundDiv.css("background-image", "url(http://aasfsdfasdfa.com)")
//
		// .css is a method within the jQuery library
		// can call .css on backgroundDiv to get what the "background-image" property (OF backgroundDiv) is
		// OR,  make .css a setter method: ("property you'd like to change", "new valueyou'd like it have");

// backgroundDiv.css
// no need for dollar sign because you've already got a var equal to what backgroundDiv (the div with 'background' in it) is -- so it's already "jQuery-ized"