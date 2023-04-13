class Rules {
  constructor() {
    this.element = document.querySelector(".rules");
    this.image = document.querySelector(".rules__image");
    this.button = document.querySelector(".rules-button");
    this.close = document.querySelector(".rules__close");
  }

  show() {
    this.element.classList.add("rules--show");
    this.image.classList.add("rules__image--show");
  }

  hide() {
    this.element.classList.remove("rules--show");
    this.image.classList.remove("rules__image--show");
  }
}

const rules = new Rules();

rules.button.addEventListener("click", (e) => {
  e.stopPropagation();
  rules.show();
});

rules.close.addEventListener("click", (e) => {
  rules.hide();
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("div")?.classList.contains("rules--show")) {
    rules.hide();
  }
});

class Game {
  constructor() {
    this.board = document.querySelector(".game");
    this.rock = document.querySelector(".game__chip--rock");
    this.paper = document.querySelector(".game__chip--paper");
    this.scissors = document.querySelector(".game__chip--scissors");
    this.scoreEl = document.querySelector(".header__score-points");
    this.score = 0;
    this.choice = null;
  }

  hideGameBoard() {
    this.board.classList.add("game--hide");
  }

  renderScore() {
    this.scoreEl.textContent = this.score;
  }
}

const game = new Game();

const chips = document.querySelectorAll(".game__chip");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    game.choice = chip.dataset.choice;
    game.hideGameBoard();
  });
});

// game.hideGameBoard();
