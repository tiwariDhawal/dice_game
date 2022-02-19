var randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber + ".png");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
if (randomNumber > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else if (randomNumber < randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw🙃";
}
