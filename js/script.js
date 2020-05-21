const gameSummary = {
  roundsNumber: 0,
  playerScore: 0,
  aiScore: 0,
  ties: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
};

const hands = document.querySelectorAll(".select img");

function userChoice() {
  const showPlayerChoice = document.querySelector(".player-choice");
  const playerChoice = this.cloneNode(true);
  showPlayerChoice.innerHTML = "";
  showPlayerChoice.appendChild(playerChoice);
  game.playerHand = this.dataset.option;

  gameSummary.roundsNumber += 1;
  compChoice();
  //   roundNumber();
  roundScore();
}

function compChoice() {
  const aiHand = hands[Math.floor(Math.random() * 3)];
  const aiHandTemp = aiHand.cloneNode(true);
  const showAiChoice = document.querySelector(".ai-choice");
  showAiChoice.innerHTML = "";
  showAiChoice.appendChild(aiHandTemp);
  game.aiHand = aiHandTemp.dataset.option;
}

function roundScore() {
  let i = 0;
  const roundScore = document.querySelector(".round-score");
  const score = document.createElement("div");
  const roundCounter = document.createElement("p");
  const scoreElement = document.createElement("p");
  score.classList.add("score");
  roundCounter.innerHTML = `${gameSummary.roundsNumber}.`;
  scoreElement.innerHTML = `${game.playerHand} : ${game.aiHand}`;
  score.appendChild(roundCounter);
  score.appendChild(scoreElement);
  roundScore.appendChild(score);
  roundScore.insertBefore(score, roundScore.firstChild);
}

// function roundNumber() {
//   let counter = 0;
//   for (let i = 0; i > 0; i++) {
//     counter += i;
//   }
//   gameSummary.roundsNumber = counter;
// }

hands.forEach((item) => item.addEventListener("click", userChoice));
