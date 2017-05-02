document.addEventListener("DOMContentLoaded", function() {
	// Part 1
	var changeHeading = document.getElementById("change_heading");
	changeHeading.innerHTML = "Hello World!";

	var boxes = document.querySelector("section");
	for (var i = 0; i < boxes.children.length; i++) {
		var currBox = boxes.children[i];
		currBox.addEventListener("mouseover", function (e) {
			document.getElementsByClassName("selected")[0].innerText = e.target.classList[0];
		})
	}

	var newDiv = document.createElement("div");
	newDiv.classList.add("purple");
	newDiv.style.backgroundColor = "purple";
	boxes.appendChild(newDiv);

	// Part 2 
	var width = window.innerWidth;
	var height = window.innerHeight;

	var startButton = document.querySelector("button");

	startButton.addEventListener("click", function() {

		var car1 = document.getElementsByClassName("car1");
		car1[0].style.marginLeft = 0;
		var car2 = document.getElementsByClassName("car2");
		car2[0].style.marginLeft = 0;

		var carOneRace = setInterval(function() {
			// this car1 variable increases by 10 every second, but can't get the actual margin to change
			var change = parseInt(car1[0].style.marginLeft) + Math.floor(Math.random() * 10);
			car1[0].style.marginLeft = change.toString() + 'px';

			console.log("margin left is " + car1[0].style.marginLeft);
			console.log("width is " + width);

			// it also stops in time
			if (parseInt(car1[0].style.marginLeft) >= width) {
				setTimeout(function(){
			   		clearTimeout(carOneRace);
				});
				alert("Winner is car 1!");
			}
		}, 100);

		var carTwoRace = setInterval(function() {
			// this car1 variable increases by 10 every second, but can't get the actual margin to change
			var change = parseInt(car2[0].style.marginLeft) + Math.floor(Math.random() * 10);
			car2[0].style.marginLeft = change.toString() + 'px';

			console.log("margin left is " + car2[0].style.marginLeft);
			console.log("width is " + width);

			// it also stops in time
			if (parseInt(car2[0].style.marginLeft) >= width) {
				setTimeout(function(){
			   		clearTimeout(carTwoRace);
				});
				alert("Winner is car 2!");
			}
		}, 100);
	});
});
