const choices = ["rock", "paper", "scissor"];

let userScore = 0;
let compScore = 0;

function play(userChoice) {
  const compChoice = choices[Math.floor(Math.random() * 3)];

  const userImg = document.getElementById("user-img");
  const compImg = document.getElementById("comp-img");

  userImg.src = `${userChoice}.png`;
  compImg.src = `${compChoice}.png`;

  userImg.alt = userChoice;
  compImg.alt = compChoice;

  userImg.style.display = "block";
  compImg.style.display = "block";

  if (userChoice === compChoice) return;

  if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userScore++;
  } else {
    compScore++;
  }

  document.getElementById("user-score").value = userScore;
  document.getElementById("comp-score").value = compScore;
}
