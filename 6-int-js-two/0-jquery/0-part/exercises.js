// Write the necessary to code wait for the DOM to load in jQuery.

$(function() {
	// Select the footer element.
	var $footer = $("footer");

	// Select the div with an id of "container".
	var $container = $("#container");

	// Select all of the lis inside of the ul with a class of nav.
	var $nav = $(".nav li");

	// Select the third li inside of the div with a class of list-container.
	var $third = $(".list-container li:nth-child:3");

	// Select only the last li in each of the uls.
	var $last = $("ul li:last-child");
});


