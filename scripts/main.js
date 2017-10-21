




var contentShowing = false;
var currentPage;
var currentLink;


// change from intro to content view
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
}


// change the page as someone clicks on a link
function flipPage(page) {
	if(currentPage) {
		$(this.currentPage.section).fadeOut(function() { setPage(page) });
	}
	else {
		setPage(page);
	}

}

// called from flipPage to avoid repeating code
function setPage(page) {
	currentPage = page;
	$(this.currentPage.section).fadeIn('slow');
}


// random bg generator
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

// random bg generator
function rollBg() {
	$('.bg.hidden').css('background', newGradient());
	$('.bg').toggleClass('hidden');
}


$(function(){


	// Handlebars template for header
	var headerTemplate = Handlebars.compile($("#header-template").html());
	var headerTemplateComp = headerTemplate();
	$('.header-placeholder').html(headerTemplateComp);

	// links setup
	aboutLink = {
		name: "About",
		link: document.getElementById('about-link'),
		section: document.getElementById('about-section'),
	}
	projectsLink = {
		name: "Projects",
		link: document.getElementById('projects-link'),
		section: document.getElementById('projects-section'),
	}
	contactLink = {
		name: "Contact",
		link: document.getElementById('contact-link'),
		section: document.getElementById('contact-section'),
	}

	$('.nav-link').click(function() {
		flipView();
	});

	$('#about-link').click(function() {
		flipPage(aboutLink);
	});

	$('#projects-link').click(function() {
		flipPage(projectsLink);
	});

	$('#contact-link').click(function() {
		flipPage(contactLink);
	});


	// page setup
	$('.content-wrapper').hide();
	$('header').addClass('intro-header');

	// animated  background
	rollBg();
	bgInterval = setInterval(rollBg, 5000);



});




/* credits:
	animated background: http://www.jqueryscript.net/animation/Creating-Animated-Background-with-Random-Gradient-Transitions-using-jQuery.html
*/