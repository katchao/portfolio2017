
var contentShowing = false;

function flipView() {
	if(!contentShowing) {
		$('body').fadeOut('slow', function() {
			$('body').fadeIn();
			$('.content-wrapper').show();
			$('header').removeClass('intro-header').addClass('content-header'); // swap headers

			// animated background maintenance
			clearInterval(bgInterval); // stop animated bg timer
			$('.bg').css('opacity', '0');



			contentShowing = true;
		});

	}

	/*else {
		$('.content-wrapper').hide();
		$('header').removeClass('content-header').addClass('intro-header');
		contentShowing = false;
	}*/
}

function newGradient() {
	var c1 = {
		r: Math.floor(Math.random()*255),
		g: Math.floor(Math.random()*255),
		b: Math.floor(Math.random()*255)
	};
	var c2 = {
		r: Math.floor(Math.random()*255),
		g: Math.floor(Math.random()*255),
		b: Math.floor(Math.random()*255)
	};

	c1.rgb = 'rgba('+c1.r+','+c1.g+','+c1.b+', 0.8)';
	c2.rgb = 'rgba('+c2.r+','+c2.g+','+c2.b+', 0.8)';
	return 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';
}

function rollBg() {
	$('.bg.hidden').css('background', newGradient());
	$('.bg').toggleClass('hidden');
}


$(function(){


	// Handlebars template for header
	var headerTemplate = Handlebars.compile($("#header-template").html());
	var headerTemplateComp = headerTemplate();
	$('.header-placeholder').html(headerTemplateComp);


	$('.nav-link').click(function() {
		flipView();
	});






	// test code
	$('.content-wrapper').hide();
	$('header').addClass('intro-header');

	rollBg();
	bgInterval = setInterval(rollBg, 5000);

});




/* credits:
	animated background: http://www.jqueryscript.net/animation/Creating-Animated-Background-with-Random-Gradient-Transitions-using-jQuery.html
*/