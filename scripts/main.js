

var contentShowing = false;
var currentPage;
var currentLink;
var projectsList = [];

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




// render page from hash
function render(url) {
	flipView();
	if(url === 'about') {
		renderPage(aboutLink);
	}
	else if(url === 'projects') {
		renderPage(projectsLink);
	}
	else if(url === 'contact') {
		renderPage(contactLink);
	}
	else if(url.indexOf('view/') > -1) {
		// get slug from url
		var projectSlug = url.split('/').pop();
		renderPage(singleProjectLink, projectSlug);
		
	}
}


// change the page as someone clicks on a link
function renderPage(page, projectSlug) {
	// two cases to make sure the old content fades out before the new content fades in
	if(currentPage) {
		$(this.currentPage.section).fadeOut(function() { setPage(page, projectSlug) });
	}
	else {
		setPage(page, projectSlug);
	}

}



// called from renderPage to avoid repeating code
function setPage(page, projectSlug) {
	currentPage = page;
	if(currentPage === projectsLink) {
		renderAllProjects();
	}

	else if(currentPage === singleProjectLink) {
		renderSingleProject(projectSlug);
	}
	$(this.currentPage.section).fadeIn('slow');
}


// set up the all Projects page
function renderAllProjects() {
	var theTemplateScript = $("#all-projects-template").html();
	var theTemplate = Handlebars.compile(theTemplateScript);


	$.getJSON( "projects.json",
		function(data) {
			projectsList = data;
			var context = { list: data };

			Handlebars.registerHelper('link_to', function(str) {
				return new Handlebars.SafeString('#view/' + str);
			});

			var theCompiledHtml = theTemplate(context);
			$('.all-projects-placeholder').html(theCompiledHtml);

		})
	.fail(
		function(jqxhr, textStatus, error) {
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
}



function renderSingleProject(projectSlug) {

	if(!projectsList.length) {
		$.getJSON( "projects.json",
			function(data) {
				projectsList = data;
				console.log(projectsList);

				renderSingleProjectTemplate(projectSlug);
			})
		.fail(
			function(jqxhr, textStatus, error) {
				var err = textStatus + ", " + error;
				console.log( "Request Failed: " + err );
			});
	}

	else {
		renderSingleProjectTemplate(projectSlug);
	}

}


function renderSingleProjectTemplate(projectSlug) {


	var theTemplateScript = $("#single-project-template").html();
	var theTemplate = Handlebars.compile(theTemplateScript);

	var thisProject = null;

	for(var i = 0; i < projectsList.length; i++) {
		if(projectsList[i].slug === projectSlug) {
			thisProject = projectsList[i];
		}
	}

	console.log(thisProject);

	var context = { project: thisProject };

			var theCompiledHtml = theTemplate(context);
			$('.single-project-placeholder').html(theCompiledHtml).fadeIn();
			$('.project-description').html(thisProject.description);


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
	singleProjectLink = {
		name: "Single Project",
		link: document.getElementById('projects-link'),
		section: document.getElementById('single-project-section'),
	}
	contactLink = {
		name: "Contact",
		link: document.getElementById('contact-link'),
		section: document.getElementById('contact-section'),
	}


	// page setup
	$('.content-wrapper').hide();
	$('header').addClass('intro-header');


	// animated  background
	rollBg();
	bgInterval = setInterval(rollBg, 5000);


	// event handler for url change
	if(window.location.hash) {
		render(decodeURI(window.location.hash.substring(1)));
	}

	$(window).on('hashchange', function() {
		render(decodeURI(window.location.hash.substring(1)));
	})


});




/* credits:
	animated background: http://www.jqueryscript.net/animation/Creating-Animated-Background-with-Random-Gradient-Transitions-using-jQuery.html
*/