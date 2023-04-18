import createResultElements from "./createResultElements.js";
import { Loader } from "./Loader.js";
import { generateLoadingTime } from "./generateLoadingTime.js";
import { generateResult } from "./generateResult.js";

export class Result {
  constructor(game) {
    this.game = game;
    this.element = createResultElements.choices();
    this.playerChoiceEl = this.element.querySelector(".result__player");
    this.houseChoiceEl = this.element.querySelector(".result__house");
    this.winner = null;
    this.loadingTime = generateLoadingTime();
  }

  showPlayerChoice() {
    this.playerChoiceEl.appendChild(this.game.playerChoice);
    this.game.playerChoice.classList.add("game__chip--chosen", "grow");
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
      }, 0);
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

    const result = createResultElements.outcome.call(this, text);
    this.element.appendChild(result);
  };

  render() {
    this.showPlayerChoice();
    this.generateHouseChoice();

    this.showLoader()
      .then(this.showHouseChoice)
      .then(this.expandChips)
      .then(this.showResult);
  }
}
