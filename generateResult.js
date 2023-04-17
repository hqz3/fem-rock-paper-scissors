const CHOICE = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS",
};

const RESULT = {
  WIN: { text: "You win", score: 1 },
  LOSE: { text: "You lose", score: -1 },
  TIE: { text: "You tied", score: 0 },
};

export function generateResult(game) {
  const playerChoice = game.playerChoice.dataset.choice;
  const houseChoice = game.houseChoice.dataset.choice;

  let outcome = null;

  if (playerChoice === houseChoice) {
    outcome = RESULT.TIE;
  } else if (
    (playerChoice === CHOICE.ROCK && houseChoice === CHOICE.SCISSORS) ||
    (playerChoice === CHOICE.PAPER && houseChoice === CHOICE.ROCK) ||
    (playerChoice === CHOICE.SCISSORS && houseChoice === CHOICE.PAPER)
  ) {
    outcome = RESULT.WIN;
  }

  if (!outcome) outcome = RESULT.LOSE;

  game.resultText.textContent = outcome.text;
  game.score += outcome.score;
}
