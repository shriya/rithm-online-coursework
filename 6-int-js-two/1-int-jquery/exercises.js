$(document).ready(function(){
	var $submit = $("[type=submit]");

	var $table = $("table");

	$submit.on("click", function(e) {
		e.preventDefault();

		var $name = $("[name=name]");
		var $rating = $("[name=rating]");

		var $newName = $("<td>").text($name.val());
		var $newRating = $("<td>").text($rating.val());

		var $newButton = $("<button>").addClass("btn").addClass("btn-danger").text("Delete");

		var $buttonData = $("<td>").append($newButton);

		var $newRow = $("<tr>");

		$newRow.append($newName);
		$newRow.append($newRating);
		$newRow.append($buttonData);

		$table.append($newRow);

		$newButton.on("click", function(e) {
			$(e.target).parent().parent().remove();
		});

		$name.val("");
		$rating.val("");
	});
});
