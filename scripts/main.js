
var contentShowing = false;

function flipView() {
	if(!contentShowing) {
		$('.content-wrapper').show();
		$('.intro-wrapper').hide();
		contentShowing = true;
	}

	else {
		$('.content-wrapper').hide();
		$('.intro-wrapper').show();
		contentShowing = false;
	}
}


$(function(){


	// Handlebars template for header
	var headerTemplate = Handlebars.compile($("#header-template").html());
	var headerTemplateComp = headerTemplate();
	$('.header-placeholder').html(headerTemplateComp);


	$('.about-me-link').click(function() {
		flipView();
	});




	// test code
	$('.content-wrapper').show();
	$('.intro-wrapper').hide();


});

