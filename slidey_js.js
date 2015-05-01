imageArray= [
"http://freecelebritywallpapers.com/file/125389/800x600/none/djangounchainedwallpaper-1c733.jpg",
"http://freecelebritywallpapers.com/file/125478/800x600/none/reservoir-dogs-wallpaper-01.jpg",
"http://freecelebritywallpapers.com/file/125419/800x600/none/kill-bill-wallpaper-06.jpg",
"http://freecelebritywallpapers.com/file/125408/800x600/none/inglourious-basterds-wallpaper-01.jpg",
"http://freecelebritywallpapers.com/file/125440/800x600/none/pulp-fiction-quentin-tarantino-john-travolta.jpg"]

$(document).ready(function(){

  var background = $("#background")
  var counter = 0
  var changeBackgroundID = setInterval(change, 3000)

  function change(){
    backgroundImage = "url('" + imageArray[counter] + "')"
    background.css({"background-image":backgroundImage,
                    "height":"100%;"
                  })
    counter++
    if(counter == 5){
      counter = 0
    }

  }


})
