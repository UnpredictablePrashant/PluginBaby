var Main = (function($) {

	var init = function() {

		// preload functionality
		if(typeof Loader !== 'undefined') {
			Loader.preload('body', '#loading-percent', function() { 
				$('.loading-modal').delay(500).fadeOut(1000);
			})
		}

		// contact functionality
		if(typeof Contact !== 'undefined') 
			Contact.init();

		

		// remove video functionality for mobile
		if(Modernizr.appleios) {
			$('video').remove();
			$('.overlay').remove();
		}

	};
	
	return {
		init: init
	};

}(jQuery));

$(function() {
	Main.init();
});

Modernizr.addTest('ipad', function () {
return !!navigator.userAgent.match(/iPad/i);
});
 
Modernizr.addTest('iphone', function () {
return !!navigator.userAgent.match(/iPhone/i);
});
 
Modernizr.addTest('ipod', function () {
return !!navigator.userAgent.match(/iPod/i);
});
 
Modernizr.addTest('appleios', function () {
return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
});

$(function(){
  $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

  $(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
  });
});

// var player;

// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('video', {
//         events: {
//             'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//         }
//     });
// }

// function muteme(event) {
// 	player.mute();
// }