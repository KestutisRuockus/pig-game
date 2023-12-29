// First reached 100 points wins!
// if player rolled number 1 - he looses his turn score and others player turn begins
// player can press 'HOLD' button to keep current turn score, but then starts other player turn
// Good Luck! ;)

const player0 = document.getElementById("player0");
const player1 = document.getElementById("player1");
const btnNewGame = document.getElementById("btn_new");
const btnRoll = document.getElementById("btn_roll");
const btnHold = document.getElementById("btn_hold");
let diceImg = document.getElementById("dice_img");
let currentPlayer, currentScore, scoreList;

function init() {
  currentPlayer = 0;
  currentScore = 0;
  scoreList = [0, 0];
}

// reset score on 'NEW GAME' button clicked
function newGame() {
  currentPlayer = 0;
  currentScore = 0;
  scoreList = [0, 0];
  document.getElementById("score0").textContent = 0;
  document.getElementById("score1").textContent = 0;
  document.getElementById("roll_score0").textContent = 0;
  document.getElementById("roll_score1").textContent = 0;
  player0.className = "player active";
  player1.className = "player";
}

// keep rolled scored and check or player won
function holdScore() {
  scoreList[currentPlayer] += currentScore;
  document.getElementById(`score${currentPlayer}`).textContent =
    scoreList[currentPlayer];

  if (scoreList[currentPlayer] >= 100) {
    alert(
      `Player ${currentPlayer + 1} WON!!! Congratulations Player ${
        currentPlayer + 1
      }`
    );
  } else {
    switchPlayer();
  }
}

// switch player - makes their window active && resets current score or keeps it
function switchPlayer() {
  document.getElementById(`roll_score${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
}

// get random number from 1 to 6 and render dice img && score values
function rollDice() {
  const min = 1;
  const max = 6;
  const dice = Math.floor(Math.random() * (max - min + 1) + min);
  const rollScore = document.getElementById(`roll_score${currentPlayer}`);

  diceImg.src = `/img/dice-${dice}.png`;

  // Check or
  if (dice !== 1) {
    currentScore += dice;
    rollScore.textContent = currentScore;
  } else {
    switchPlayer();
  }
}

// starts new game
btnNewGame.addEventListener("click", newGame);

// roll dice to get random number
btnRoll.addEventListener("click", rollDice);

//  add rolled score
btnHold.addEventListener("click", holdScore);

init();
