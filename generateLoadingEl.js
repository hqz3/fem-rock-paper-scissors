export function generateLoadingEl(houseChoiceEl, height, width, loadingTime) {
  const loadingEl = document.createElement("div");
  loadingEl.classList.add("loading");
  loadingEl.innerHTML = `<span class="loading__percent">0%</span>`;
  loadingEl.style.height = `${height}px`;
  loadingEl.style.width = `${width}px`;
  houseChoiceEl.appendChild(loadingEl);

  const interval = loadingTime / 100;

  const percentEl = document.querySelector(".loading__percent");
  let percent = 0;
  const ref = setInterval(() => {
    percent++;
    percentEl.textContent = `${percent}%`;
    if (percent === 100) {
      clearInterval(ref);
      houseChoiceEl.removeChild(loadingEl);
    }
  }, interval);
}
