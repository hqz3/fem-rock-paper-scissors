const rulesButtonEl = document.querySelector(".rules-button");
const rulesCloseButtonEl = document.querySelector(".rules__close");
const rulesEl = document.querySelector(".rules");

rulesButtonEl.addEventListener("click", (e) => {
  rulesEl.classList.add("rules--show");
});

rulesCloseButtonEl.addEventListener("click", (e) => {
  rulesEl.classList.remove("rules--show");
});
