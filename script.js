"use strict";

let secretNumber = randomizeNumber();
let score = 20;
let highScore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;

function randomizeNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayString(idClass, string) {
  document.querySelector(`.${String(idClass)}`).textContent = String(string);
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  while (score > 0) {
    // When play
    if (!guess || guess > 20 || guess < 1) {
      displayString(`message`, `Choose a number between 1-20...`);

      // When guess right
    } else if (guess === secretNumber) {
      displayString(`message`, "Congratulations! You're guessing it right!");
      document.querySelector("body").style.backgroundColor = "rgb(11, 189, 20)";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      // When wrong
    } else if (guess !== secretNumber) {
      score--;
      displayString(`score`, score);
      displayString(`message`, guess < secretNumber ? "Too low!" : "Too high!");
    }
    if (score === 0) {
      displayString(`message`, "Your score is 0, You lose!");
    }
    break;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = randomizeNumber();
  score = 20;
  displayString(`score`, score);
  displayString(`message`, "Start guessing...");
  displayString(`number`, `?`);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
