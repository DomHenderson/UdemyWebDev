var soundMap = new Map();
soundMap.set("w", "sounds/tom-1.mp3");
soundMap.set("a", "sounds/tom-2.mp3");
soundMap.set("s", "sounds/tom-3.mp3");
soundMap.set("d", "sounds/tom-4.mp3");
soundMap.set("j", "sounds/crash.mp3");
soundMap.set("k", "sounds/kick-bass.mp3");
soundMap.set("l", "sounds/snare.mp3");

function playSound(key) {
	var soundPath = soundMap.get(key);
	if(soundPath) {
		var audio = new Audio(soundPath);
		audio.play();
	} else {
		console.log("unexpected button text: "+text);
	}
}

function buttonAnimation(key) {
	var button = document.querySelector("."+key);
	button.classList.add("pressed");

	setTimeout(function() {
		button.classList.remove("pressed");
	}, 100);

}

function handleClick() {
	var key = this.textContent.toLowerCase();
	playSound(key);
	buttonAnimation(key);
}

document.querySelectorAll("button.drum")
	.forEach((button) => button.addEventListener("click", handleClick));

document.addEventListener("keydown", function(event) {
	playSound(event.key);
	buttonAnimation(event.key);
});