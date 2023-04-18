import { Loader } from "./Loader.js";
import { generateLoadingTime } from "./generateLoadingTime.js";
import { generateResult } from "./generateResult.js";

export class Result {
  constructor(game) {
    this.game = game;
    this.element = document.createElement("main");
    this.element.classList.add("choice");
    this.element.innerHTML = `
  <div class="choice__player">
    <span class="choice__text">You picked</span>
  </div>
  <div class="choice__house">
    <span class="choice__text">The house picked</span>
  </div>
  <div class="result result--hide">
    <p class="result__text"></p>
    <button class="result__replay-button scale">Play again</button>
  </div>
    `;

    this.playerChoiceEl = this.element.querySelector(".choice__player");
    this.houseChoiceEl = this.element.querySelector(".choice__house");

    this.winner = null;

    this.loadingTime = generateLoadingTime();

    this.replayButton = this.element.querySelector(".result__replay-button");
    this.replayButton.addEventListener("click", () =>
      this.game.showGameBoard()
    );

    this.resultEl = this.element.querySelector(".result");
    this.resultText = this.element.querySelector(".result__text");
  }

  generateHouseChoice() {
    const choice = Math.floor(Math.random() * 3);
    this.game.houseChoice = this.game.chips[choice].cloneNode(true);
  }

  showLoader = () => {
    return new Promise((resolve, reject) => {
      const loader = new Loader(
        this.houseChoiceEl,
        this.loadingTime,
        this.game.playerChoice.offsetHeight,
        this.game.playerChoice.offsetWidth
      );
      loader.render();
      resolve();
    });
  };

  showHouseChoice = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.houseChoiceEl.appendChild(this.game.houseChoice);
        this.game.houseChoice.classList.add("game__chip--chosen", "grow");
        resolve();
      }, this.loadingTime);
    });
  };

  expandChips = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.game.playerChoice.classList.add("game__chip--grow-final");
        this.game.houseChoice.classList.add("game__chip--grow-final");
        resolve();
      }, 750);
    });
  };

  showResult = () => {
    const { text, score } = generateResult(
      this.game.playerChoice.dataset.choice,
      this.game.houseChoice.dataset.choice
    );

    if (score === 1) this.winner = this.game.playerChoice;
    else if (score === -1) this.winner = this.game.houseChoice;
    this.winner?.classList.add("game__chip--winner");

    this.game.updateScore(score);
    this.resultText.textContent = text;
    this.resultEl.classList.remove("result--hide");
  };

  render() {
    // Show the player's choice
    this.playerChoiceEl.appendChild(this.game.playerChoice);
    this.game.playerChoice.classList.add("game__chip--chosen", "grow");

    this.generateHouseChoice();

    this.showLoader()
      .then(this.showHouseChoice)
      .then(this.expandChips)
      .then(this.showResult);
  }
}
