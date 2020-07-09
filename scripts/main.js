import * as constants from "../constants.js";

var contentShowing = false;
var currentPage;
var currentLink;
var projectsList = [];

const bgInterval = setInterval(rollBg, 5000);

// change from intro to content view
function flipView() {
	if (!contentShowing) {
		$("body").fadeOut("slow", function () {
			$("body").fadeIn();
			$(".content-wrapper").show();
			$("header").removeClass("intro-header").addClass("content-header"); // swap headers

			// animated background maintenance
			clearInterval(bgInterval); // stop animated bg timer
			$(".bg").css("opacity", "0");

			contentShowing = true;
		});
	}
}

// render page from hash
function render(url) {
	flipView();

	if (url === "about") {
		renderPage(constants.ABOUT_LINK);
	} else if (url === "projects") {
		renderPage(constants.PROJECTS_LINK);
	} else if (url === "contact") {
		renderPage(constants.CONTACT_LINK);
	} else if (url.indexOf("view/") > -1) {
		// get slug from url
		var projectSlug = url.split("/").pop();
		renderPage(constants.SINGLE_PROJECT_LINK, projectSlug);
	}
}

// change the page as someone clicks on a link
function renderPage(page, projectSlug) {
	// two cases to make sure the old content fades out before the new content fades in
	if (currentPage) {
		$(currentPage.section).fadeOut(function () {
			setPage(page, projectSlug);
		});
	} else {
		setPage(page, projectSlug);
	}
}

// called from renderPage to avoid repeating code
function setPage(page, projectSlug) {
	currentPage = page;
	if (currentPage === constants.PROJECTS_LINK) {
		renderAllProjects();
	} else if (currentPage === constants.SINGLE_PROJECT_LINK) {
		renderSingleProject(projectSlug);
	}
	$(currentPage.section).fadeIn("slow");
}

// set up the all Projects page
function renderAllProjects() {
	var theTemplateScript = $("#all-projects-template").html();
	var theTemplate = Handlebars.compile(theTemplateScript);
	var context = { list: constants.PROJECTS };

	Handlebars.registerHelper("link_to", function (str) {
		return new Handlebars.SafeString("#view/" + str);
	});

	var theCompiledHtml = theTemplate(context);
	$(".all-projects-placeholder").html(theCompiledHtml);
}

function renderSingleProject(projectSlug) {
	renderSingleProjectTemplate(projectSlug);
}

function getProjectFromSlug(projectSlug) {
	var thisProject = null;
	constants.PROJECTS.forEach((project) => {
		if (project.slug === projectSlug) {
			thisProject = project;
		}
	});
	return thisProject;
}

function renderSingleProjectTemplate(projectSlug) {
	var theTemplateScript = $("#single-project-template").html();
	var theTemplate = Handlebars.compile(theTemplateScript);
	const project = getProjectFromSlug(projectSlug);
	var context = { project };
	var theCompiledHtml = theTemplate(context);
	$(".single-project-placeholder").html(theCompiledHtml).fadeIn();
	$(".project-description").html(project.description);
}

// random bg generator
function newGradient() {
	var c1 = {
		r: Math.floor(Math.random() * 255),
		g: Math.floor(Math.random() * 255),
		b: Math.floor(Math.random() * 255),
	};
	var c2 = {
		r: Math.floor(Math.random() * 255),
		g: Math.floor(Math.random() * 255),
		b: Math.floor(Math.random() * 255),
	};

	c1.rgb = "rgba(" + c1.r + "," + c1.g + "," + c1.b + ", 0.8)";
	c2.rgb = "rgba(" + c2.r + "," + c2.g + "," + c2.b + ", 0.8)";
	return "radial-gradient(at top left, " + c1.rgb + ", " + c2.rgb + ")";
}

// random bg generator
function rollBg() {
	$(".bg.hidden").css("background", newGradient());
	$(".bg").toggleClass("hidden");
}

$(function () {
	// Handlebars template for header
	var headerTemplate = Handlebars.compile($("#header-template").html());
	var footerTemplate = Handlebars.compile($("#footer-template").html());
	$(".header-placeholder").html(headerTemplate());
	$(".footer-placeholder").html(footerTemplate());

	// page setup
	$(".content-wrapper").hide();
	$("header").addClass("intro-header");

	// animated  background
	rollBg();

	// event handler for url change
	if (window.location.hash) {
		render(decodeURI(window.location.hash.substring(1)));
	}

	$(window).on("hashchange", function () {
		render(decodeURI(window.location.hash.substring(1)));
	});
});

/* credits:
	animated background: http://www.jqueryscript.net/animation/Creating-Animated-Background-with-Random-Gradient-Transitions-using-jQuery.html
*/
