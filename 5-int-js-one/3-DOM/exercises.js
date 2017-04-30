// Select the section with an id of container without using querySelector.
var container = document.getElementById("container");

// Select the section with an id of container using querySelector.
var contId = document.querySelector("#container");

// Select all of the list items with a class of "second".
var seconds = document.getElementsByClassName("second");

// Select a list item with a class of third, but only the list item inside of the ol tag.
var ol = document.querySelector("ol .third");

// Give the section with an id of container the text "Hello!".

// comment out or it breaks the rest
// container.innerText = "Hello";

// Add the class main to the div with a class of footer.
var footer = document.getElementsByClassName("footer")[0];
footer.classList.add("main");

// Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// Create a new li element.
var newLi = document.createElement("li");

// Give the li the text "four".
newLi.innerText = "four";

// Append the li to the ul element.
var list = document.querySelector("ul");
list.appendChild(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of "green".
var lis = document.querySelectorAll("ol li");
for (var i = 0; i < lis.length; i++) {
	lis[i].style["background-color"] = "green";
}

// Remove the div with a class of footer.
var body = document.querySelector("body");
body.removeChild(footer);


