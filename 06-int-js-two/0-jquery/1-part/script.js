$(function() {

	// 1. When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
	console.log("Let's get ready to party with jQuery!");


	// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
	var $article = $("article");

	// the css didn't work?? so I added more, and moved it to style.css
	$article.addClass("image-center");

	// 3. Remove the last paragraph in the article.
	var $lastp = $article.find("p").last();
	$lastp.remove();

	// 4. Set the font size of h1 with an id of title to be a random pixel size from 0 to 100.

	var rand = Math.floor(Math.random() * 101);
	$("h1#title").css("font-size", rand);

	// 5. Add an item to the list; it can say whatever you want.

	var $list = $("ol")
	$list.append("<li>This is my random item</li>");

	// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.

	var $aside = $("aside");
	$aside.empty();
	$aside.text("So sorry that I had the list there before. This show will wreck your evening, Your whole life and your day, Every single episode is nothing but dismay So look away, look away, look away. Three children lose their home and go to live with someone awful, He tries to steal their fortune with a plot that's not quite awful, It's hard to fellom how the orphans manage to live through it, But how a descent person like yourself would even want to view it. Just look away, look away, look away There's nothing but horror and inconvenience on the way, Ask any stable person 'should I watch?' and they will say -- Look away");

	// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

	// what I tried that didn't work: 
	// var $red = $("div.row").last().children().eq(0).children();
	// var $blue = $("div.row").last().children().eq(1).children();
	// var $green = $("div.row").last().children().eq(2).children();

	// var $body = $("body");

	// $red.on("change", function(e) {
	// 	$body.css("background-color", 'rgb(${$red.val()}, ${$blue}, ${$green})');
	// });

	// $blue.on("change", function(e) {
	// 	$body.css("background-color", 'rgb(${$red}, ${$blue.val()}, ${$green})');
	// });

	// $green.on("change", function(e) {
	// 	$body.css("background-color", 'rgb(${$red}, ${$blue}, ${$green.val()})');
	// });

	$(".form-control").on('keyup blur change', function() {
      var red = $(".form-control").eq(0).val();
      var blue = $(".form-control").eq(1).val();
      var green = $(".form-control").eq(2).val();
      $("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
    });

	// 8. Add an event listener so that when you click on the image, it is removed from the DOM.

	$("img").on("click", function() {
		$("img").remove();
	})
})