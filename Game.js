import { Result } from "./Result.js";

export class Game {
  constructor() {
    this.body = document.body;
    this.gameBoard = document.querySelector(".game");
    this.replay = document.querySelector(".result__replay-button");

    this.chips = document.querySelectorAll(".game__chip");
    this.rock = document.querySelector(".game__chip--rock");
    this.paper = document.querySelector(".game__chip--paper");
    this.scissors = document.querySelector(".game__chip--scissors");

    this.score = 0;
    this.scoreEl = document.querySelector(".header__score-points");

    this.playerChoice = null;
    this.houseChoice = null;

    this.chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        this.playerChoice = chip.cloneNode(true);
        this.showResultBoard();
      });
    });
  }

  updateScore(score) {
    this.score += score;
    this.scoreEl.textContent = this.score;
  }

  showGameBoard() {
    this.body.removeChild(this.body.children[1]);
    this.body.insertBefore(this.gameBoard, this.body.children[1]);
  }

  showResultBoard() {
    const resultBoard = new Result(this);
    this.body.removeChild(this.body.children[1]);
    this.body.insertBefore(resultBoard.element, this.body.children[1]);
    resultBoard.render();
  }
}
