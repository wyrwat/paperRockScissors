let gameSummary = {
  roundsNumber: 0,
  playerScore: 0,
  aiScore: 0,
  ties: 0,
};

let game = {
  playerHand: "",
  aiHand: "",
};

const hands = document.querySelectorAll(".select img");
const restartBtn = document.querySelector(".restart-btn");
const showPlayerChoice = document.querySelector(".player-choice");
const showAiChoice = document.querySelector(".ai-choice");
const roundResult = document.querySelector(".round-score");

function compChoice() {
  const aiHand = hands[Math.floor(Math.random() * 3)];
  const aiHandTemp = aiHand.cloneNode(true);
  showAiChoice.innerHTML = "";
  showAiChoice.appendChild(aiHandTemp);
  game.aiHand = aiHandTemp.dataset.option;
}

function roundScore() {
  const score = document.createElement("div");
  const roundCounter = document.createElement("p");
  const scoreElement = document.createElement("p");
  score.classList.add("score");
  roundCounter.innerHTML = `${gameSummary.roundsNumber}.`;
  scoreElement.innerHTML = `${game.playerHand} : ${game.aiHand}`;
  score.appendChild(roundCounter);
  score.appendChild(scoreElement);
  roundResult.appendChild(score);
  roundResult.insertBefore(score, roundResult.firstChild);
}

function checkResult(player, ai) {
  if (player === ai) {
    return "draw";
  } else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
    return "win";
  } else return "loss";
}

function publishResult(player, ai, result) {
  gameSummary.numbers++;
  document.querySelector("p.rounds-number span").textContent = gameSummary.roundsNumber;
  console.log(result);
  if (result === "win") {
    gameSummary.playerScore++;
    document.querySelector("p.player__score span").textContent = gameSummary.playerScore;
  } else if (result === "loss") {
    gameSummary.aiScore++;
    document.querySelector("p.ai__score span").textContent = gameSummary.aiScore;
  } else {
    gameSummary.ties++;
    document.querySelector("p.ties span").textContent = gameSummary.ties;
  }
}

function userChoice() {
  const playerChoice = this.cloneNode(true);
  showPlayerChoice.innerHTML = "";
  showPlayerChoice.appendChild(playerChoice);
  game.playerHand = this.dataset.option;
  gameSummary.roundsNumber += 1;

  compChoice();
  roundScore();

  const gameResult = checkResult(game.playerHand, game.aiHand);
  publishResult(game.playerHand, game.aiHand, gameResult)
}

function resetGame() {
  gameSummary.roundsNumber = 0;
  gameSummary.playerScore = 0;
  gameSummary.aiScore = 0;
  gameSummary.ties = 0;

  document.querySelector("p.rounds-number span").textContent = gameSummary.roundsNumber;
  document.querySelector("p.player__score span").textContent = gameSummary.playerScore;
  document.querySelector("p.ai__score span").textContent = gameSummary.aiScore;
  document.querySelector("p.ties span").textContent = gameSummary.ties;

  showPlayerChoice.innerHTML = "";
  showAiChoice.innerHTML = "";
  roundResult.innerHTML = "";
}

hands.forEach((item) => item.addEventListener("click", userChoice));
restartBtn.addEventListener("click", resetGame);