'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function (e) {

		$('.jumbotron h1').text("Web development is fun");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);


	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

var toggle = 0;
function projectClick(e) {
	console.log("Project clicked");
	e.preventDefault();

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if (toggle == 0) {
		$(this).css("background-color", "green");
	} else {
		$(this).css("background-color", "white");
	}

	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		description.fadeToggle("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}

	toggle ^= 1;
}