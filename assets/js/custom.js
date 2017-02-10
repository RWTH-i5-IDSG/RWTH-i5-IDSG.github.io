document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';

// Adapt padding from body depending on navbar-height
$(window).resize(function () { 
		$('body').css('padding-top', parseInt($('#navbar').css("height"))+10);
	});

	$(window).load(function () { 
	   $('body').css('padding-top', parseInt($('#navbar').css("height"))+10);         
	});