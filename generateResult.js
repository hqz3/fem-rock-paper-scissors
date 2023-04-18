const CHOICE = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS",
};

const RESULT = {
  WIN: { text: "You win", score: 1 },
  LOSE: { text: "You lose", score: -1 },
  DRAW: { text: "Draw", score: 0 },
};

export function generateResult(playerChoice, houseChoice) {
  let outcome = null;
  if (playerChoice === houseChoice) {
    outcome = RESULT.DRAW;
  } else if (
    (playerChoice === CHOICE.ROCK && houseChoice === CHOICE.SCISSORS) ||
    (playerChoice === CHOICE.PAPER && houseChoice === CHOICE.ROCK) ||
    (playerChoice === CHOICE.SCISSORS && houseChoice === CHOICE.PAPER)
  ) {
    outcome = RESULT.WIN;
  }
  if (!outcome) outcome = RESULT.LOSE;
  return outcome;
}
