var imageSpace = document.getElementById("background");
var imageCollection = ["http://i.imgur.com/oq98hTA.jpg", "http://i.imgur.com/Sl8CPMP.jpg", "http://i.imgur.com/hG9Xb.jpg", "http://i.imgur.com/GYEse.jpg", "http://i.imgur.com/ndDhksZ.jpg"];
var random = Math.floor(Math.random() * 4);
console.log(random);
i = 0;

backgroundImage();

setInterval(function () {
		i++;
		if(i >= imageCollection.length){
			i = 0;
		}
		backgroundImage();
}, 1000);

console.log(imageCollection[1])

function backgroundImage(){
$("#background").css('background-image', 'url(' + imageCollection[i] + ')');
};
