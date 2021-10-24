$("body").keydown(function(event) {
	$("h1").text(event.key);
	console.log(event.which+" pressed");
});

$("h1").on("mouseover", function() {
	$("h1").css("color", "purple");
})