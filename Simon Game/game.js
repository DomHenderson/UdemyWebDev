var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function playSound(colour) {
	var audio = new Audio("sounds/"+colour+".mp3");
	audio.play();
}

function nextSequence() {
	++level;
	userClickedPattern = []
	$("h1").text("Level "+level);
	var randomNumber = Math.floor(Math.random()*4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	$("#"+randomChosenColour).fadeOut(400, function() {
		$(this).fadeIn(400);
	});
	playSound(randomChosenColour);
}

function clickHandler() {
	var userChosenColour = $(this).attr('id');
	playSound(userChosenColour);
	animatePress(userChosenColour);
	if(started) {
		userClickedPattern.push(userChosenColour);
		console.log(gamePattern);
		console.log(userClickedPattern);
		checkAnswer();
	}
}

function animatePress(currentColour) {
	$("."+currentColour).addClass("pressed");
	setTimeout(function() {
		$("."+currentColour).removeClass("pressed");
	}, 100);
}

function checkAnswer() {
	var index = userClickedPattern.length-1;
	if(userClickedPattern[index] === gamePattern[index]) {
		if(userClickedPattern.length === gamePattern.length) {
			setTimeout(nextSequence, 200);
		}
	} else {
		console.log("Incorrect");
		playSound("wrong");
		$("body").addClass("game-over");
		setTimeout(function() {
			$("body").removeClass("game-over");
		}, 200);
		$("h1").text("Game Over, Press Any Key to Restart");
		startOver();
	}
}

function startOver() {
	level = 0;
	gamePattern = [];
	userClickedPattern = [];
	started = false;
}

$(".btn").click(clickHandler);


$(document).on("keydown", function() {
	if(!started) {
		started = true;
		nextSequence();
	}
});