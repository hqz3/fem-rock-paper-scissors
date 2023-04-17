import { generateHouseChoice } from "./generateHouseChoice.js";
import { generateLoadingEl } from "./generateLoadingEl.js";
import { generateLoadingTime } from "./generateLoadingTime.js";
import { generateResult } from "./generateResult.js";

export class Game {
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

    this.resultEl = document.querySelector(".result");
    this.resultText = document.querySelector(".result__text");

    this.playerChoice = null;
    this.houseChoice = null;

    this.replay.addEventListener("click", () => this.replayGame());

    this.chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        this.playerChoice = chip.cloneNode(true);
        this.hideGameBoard();
        this.showChoiceBoard();
      });
    });
  }

  updateScore() {
    this.scoreEl.textContent = this.score;
  }

  showGameBoard() {
    this.board.classList.remove("game--hide");
  }

  hideGameBoard() {
    this.board.classList.add("game--hide");
  }

  showResult() {
    // Compute the game result
    generateResult(this);
    this.updateScore();
    this.resultEl.classList.remove("result--hide");
  }

  showChoiceBoard() {
    // Show the choice board
    this.choiceBoard.classList.remove("choice--hide");

    // Show the player's choice
    this.playerChoiceEl.appendChild(this.playerChoice);
    this.playerChoice.classList.add("game__chip--chosen", "grow");

    // Show the loading element
    const loadingTime = generateLoadingTime();
    generateLoadingEl(this, loadingTime);

    // Generate the house's choice
    generateHouseChoice(this);

    setTimeout(() => {
      this.houseChoiceEl.appendChild(this.houseChoice);
      this.houseChoice.classList.add("game__chip--chosen", "grow");

      setTimeout(() => {
        this.houseChoice.classList.add("game__chip--grow-final");
        this.playerChoice.classList.add("game__chip--grow-final");
        this.showResult();
      }, 750);
    }, loadingTime);
  }

  hideChoiceBoard() {
    this.choiceBoard.classList.add("choice--hide");
    this.resultEl.classList.add("result--hide");

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
}
