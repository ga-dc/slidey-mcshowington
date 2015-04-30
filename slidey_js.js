$(document).ready(function(){

var images = [
	"https://farm9.staticflickr.com/8101/8460969215_551c183b48_o.jpg", 
	"https://farm6.staticflickr.com/5052/5408552406_57d7432ef8_o.jpg", 
	"https://farm6.staticflickr.com/5173/5408277567_1ca8749378_o.jpg", 
	"https://farm6.staticflickr.com/5174/5408273403_eabc443fdf_o.jpg", 
	"https://farm4.staticflickr.com/3216/2952194227_978812477a_o.jpg"
	]

var imageNumber = 0

var changeBackground = function(){
	$("#background").css("background-image", "url(" + images[imageNumber] + ")");
	imageNumber++;
	if (imageNumber >= images.length){
		imageNumber = 0;
	}
}
// }
setInterval(changeBackground, 5000);
});
