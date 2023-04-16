import { Rules } from "./Rules.js";
import { generateLoadingEl } from "./generateLoadingEl.js";
import { generateLoadingTime } from "./generateLoadingTime.js";

new Rules();

class Game {
  constructor() {
    this.board = document.querySelector(".game");
    this.chips = document.querySelectorAll(".game__chip");
    this.replay = document.querySelector(".result__replay-button");

    this.rock = document.querySelector(".game__chip--rock");
    this.paper = document.querySelector(".game__chip--paper");
    this.scissors = document.querySelector(".game__chip--scissors");

    this.scoreEl = document.querySelector(".header__score-points");
    this.score = 0;

    this.choiceBoard = document.querySelector(".choice");
    this.playerChoiceEl = document.querySelector(".choice__player");
    this.houseChoiceEl = document.querySelector(".choice__house");

    this.playerChoice = this.paper;
    this.houseChoice = null;

    this.replay.addEventListener("click", () => this.replayGame());
  }

  showGameBoard() {
    this.board.classList.remove("game--hide");
  }

  hideGameBoard() {
    this.board.classList.add("game--hide");
  }

  houseChoose() {
    const choice = Math.floor(Math.random() * 3);
    return this.chips[choice].cloneNode(true);
  }

  showLoading(loadingTime) {
    generateLoadingEl(
      this.houseChoiceEl,
      this.playerChoice.offsetHeight,
      this.playerChoice.offsetWidth,
      loadingTime
    );
  }

  showChoiceBoard() {
    // Show the choice board
    this.choiceBoard.classList.remove("choice--hide");

    this.playerChoice.classList.add("game__chip--chosen", "grow");
    this.playerChoiceEl.appendChild(game.playerChoice);

    // House picks a chip
    this.houseChoice = this.houseChoose();

    const loadingTime = generateLoadingTime();
    this.showLoading(loadingTime);

    setTimeout(() => {
      this.houseChoice.classList.add("game__chip--chosen", "grow");
      this.houseChoiceEl.appendChild(game.houseChoice);
    }, loadingTime);
  }

  hideChoiceBoard() {
    this.choiceBoard.classList.add("choice--hide");

    // Remove chosen chips from the DOM
    this.playerChoiceEl.removeChild(this.playerChoice);
    this.houseChoiceEl.removeChild(this.houseChoice);

    this.playerChoice = null;
    this.houseChoice = null;
  }

  replayGame() {
    this.hideChoiceBoard();
    this.showGameBoard();
  }

  showChoices() {
    this.hideGameBoard();
    this.showChoiceBoard();
  }

  renderScore() {
    this.scoreEl.textContent = this.score;
  }
}

const game = new Game();

game.chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    game.playerChoice = chip.cloneNode(true);
    game.showChoices();
  });
});

game.showChoices();
