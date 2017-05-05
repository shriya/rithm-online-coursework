document.addEventListener("DOMContentLoaded", function() {

	var submit = document.querySelector("button");

	var ul = document.querySelector("ul");

	submit.addEventListener("click", function (e) {
		// don't let page reload
		e.preventDefault();

		// make new item on list with input text on click
		var newItem = document.createElement("li");
		newItem.classList.add("panel", "panel-default");
		newItem.innerText = document.querySelector("input").value;

		// make new span with X on the right side of the panel
		var xOut = document.createElement("span");
		xOut.classList.add("glyphicon","glyphicon-remove","pull-right");

		// add span with X to remove to list item, add list item to list
		newItem.appendChild(xOut);
		ul.appendChild(newItem);

		// set form to add back to default input text ("empty")
		document.querySelector("input").value = "";
	})

	// if user clicks on an item, it's completed and crossed out
	ul.addEventListener("click", function(e) {
		if (e.target.tagName.toLowerCase() === "li") {
			e.target.style.textDecoration = "line-through";
		} else if (e.target.tagName.toLowerCase() === "span") {
			e.target.parentNode.remove();
		}
	});
});