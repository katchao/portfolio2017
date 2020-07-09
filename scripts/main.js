import * as constants from "./constants.js";
import rollBg from "./bg-generator.js";

var contentShowing = false;
var currentPage;

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
function renderPage(pageInfo, projectSlug) {
	// two cases to make sure the old content fades out before the new content fades in
	if (currentPage) {
		$(currentPage.section).fadeOut(function () {
			setPage(pageInfo, projectSlug);
		});
	} else {
		setPage(pageInfo, projectSlug);
	}
}

// called from renderPage to avoid repeating code
function setPage(pageInfo, projectSlug) {
	currentPage = pageInfo;
	if (currentPage === constants.PROJECTS_LINK) {
		renderAllProjects();
	} else if (currentPage === constants.SINGLE_PROJECT_LINK) {
		renderSingleProject(projectSlug);
	}
	$(currentPage.section).fadeIn("slow");
}

// set up the all Projects page
function renderAllProjects() {
	Handlebars.registerHelper("link_to", function (str) {
		return new Handlebars.SafeString("#view/" + str);
	});
	const template = Handlebars.compile($("#all-projects-template").html());
	const compiled = template({ list: constants.PROJECTS });
	$(".all-projects-placeholder").html(compiled);
}

function renderSingleProject(projectSlug) {
	const project = getProjectFromSlug(projectSlug);
	const template = Handlebars.compile($("#single-project-template").html());
	const compiled = template({ project });
	$(".single-project-placeholder").html(compiled).fadeIn();
	$(".project-description").html(project.description);
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

function renderHeaderAndFooter() {
	var headerTemplate = Handlebars.compile($("#header-template").html());
	var footerTemplate = Handlebars.compile($("#footer-template").html());
	$(".header-placeholder").html(headerTemplate());
	$(".footer-placeholder").html(footerTemplate());
}

$(function () {
	renderHeaderAndFooter();
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
