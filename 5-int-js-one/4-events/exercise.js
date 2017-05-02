document.addEventListener("DOMContentLoaded", function() {

	var submit = document.querySelector("button");

	var ul = document.querySelector("ul");

	// make new span with X
	var xOut = document.createElement("span");
	xOut.classList.add("glyphicon","glyphicon-remove","pull-right");

	submit.addEventListener("click", function (e) {
		// don't let page reload
		e.preventDefault();

		
		var newItem = document.createElement("li");

		// make new item on list with input text on click
		newItem.innerText = document.querySelector("input").value;
		// add span with X to remove to list item
		newItem.appendChild(xOut);

		// set form to add back to default text
		document.querySelector("input").value = "";

		ul.appendChild(newItem);
	})

	ul.addEventListener("click", function(e) {
		e.target.innerHTML = e.target.innerHTML.strike();
	})



});