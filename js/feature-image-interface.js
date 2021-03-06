$(function() {
  //page load intro
  $('#grid').hide();
  setTimeout(function(){
    $('#intro').hide();
    $('#grid').fadeIn(1500);
  }, 2500);

  //move large image
  $('.featured-image').css("background-position", "" + $('.featured-image')[0].offsetWidth + "");
  $('html').mousemove(function(e) {
    var imageWidth = $('.featured-image')[0].offsetWidth;
    var htmlWidth = e.originalEvent.clientX;
    var offset = imageWidth - htmlWidth;
    var offset2 = -htmlWidth/2;
    if (offset > -imageWidth) {
      $('.featured-image').css("background-position", "" + offset + "");
    } else {
      $('.featured-image').css("background-position", "" + offset2 + "");
    }
  });

  //preload images
  var images = new Array()
	function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
		}
	}
	preload(
		"/assets/images/robot-siyan-ren.jpeg",
		"/assets/images/redd-angelo.jpeg",
		"/assets/images/freestocks-org.jpg",
		"/assets/images/daniel-cheung.jpg",
		"/assets/images/joanna-kosinska.jpg",
    "/assets/images/devices1.png",
    "/assets/images/devices2.png",
    "/assets/images/devices3.png",
    "/assets/images/devices4.png",
    "/assets/images/devices5.png"
	)
});
