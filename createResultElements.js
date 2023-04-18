export default {
  choices() {
    const element = document.createElement("main");
    element.classList.add("result");
    element.innerHTML = `
      <div class="result__player">
        <span class="result__text">You picked</span>
      </div>
      <div class="result__house">
        <span class="result__text">The house picked</span>
      </div>
      `;
    return element;
  },

  outcome(text) {
    const element = document.createElement("div");
    element.classList.add("outcome");
    element.innerHTML = `
        <p class="outcome__text">${text}</p>
        <button class="outcome__replay-button scale">Play again</button>
      `;
    const replayButton = element.querySelector(".outcome__replay-button");
    replayButton.addEventListener("click", () => this.game.showGameBoard());

    return element;
  },
};
