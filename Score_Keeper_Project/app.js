const player1 = {
  score: document.querySelector("#p1Score"),
  button: document.querySelector("#p1Button"),
};

const player2 = {
  score: document.querySelector("#p2Score"),
  button: document.querySelector("#p2Button"),
};

const winningScoreSelect = document.querySelector("#winningScore");
let winningScore = winningScoreSelect.value;
const resetButton = document.querySelector("#reset");

const increaseScore = function (playerScore) {
  return (playerScore = parseInt(playerScore) + 1);
};

const checkScore = function () {
  if (parseInt(player1.score.innerText) === parseInt(winningScore)) {
    player1.score.classList.add("has-text-success");
    player2.score.classList.add("has-text-danger");
    player1.button.disabled = true;
    player2.button.disabled = true;
  } else if (parseInt(player2.score.innerText) === parseInt(winningScore)) {
    player1.score.classList.add("has-text-danger");
    player2.score.classList.add("has-text-success");
    player1.button.disabled = true;
    player2.button.disabled = true;
  }
};

const reset = function () {
  player1.score.innerText = "0";
  player2.score.innerText = "0";
  player1.score.classList.remove("has-text-success", "has-text-danger");
  player2.score.classList.remove("has-text-success", "has-text-danger");
  player1.button.disabled = false;
  player2.button.disabled = false;
};

winningScoreSelect.addEventListener("change", function () {
  winningScore = this.value;
  reset();
});

player1.button.addEventListener("click", function () {
  player1.score.innerText = increaseScore(player1.score.innerText);
  checkScore();
});

player2.button.addEventListener("click", function () {
  player2.score.innerText = increaseScore(player2.score.innerText);
  checkScore();
});

resetButton.addEventListener("click", reset);
