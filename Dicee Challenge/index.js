var randomNumber1 = Math.floor(Math.random()*6+1);
var leftDiceImgPath = "images/dice"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random()*6+1);
var rightDiceImgPath = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", leftDiceImgPath);
document.querySelector(".img2").setAttribute("src", rightDiceImgPath);

var header = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
	header.textContent = "🚩 Player 1 wins!";
} else if(randomNumber1 === randomNumber2) {
	header.textContent = "Draw!";
} else {
	header.textContent = "Player 2 wins! 🚩";
}