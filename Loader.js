export class Loader {
  constructor(parentEl, loadingTime, height, width) {
    this.parent = parentEl;
    this.loadingTime = loadingTime;

    this.element = document.createElement("div");
    this.element.classList.add("loading");
    this.element.innerHTML = `<span class="loading__percent">0%</span>`;
    this.element.style.height = `${height}px`;
    this.element.style.width = `${width}px`;

    this.percentEl = this.element.querySelector(".loading__percent");
  }

  render() {
    this.parent.appendChild(this.element);

    let percent = 0;
    const interval = this.loadingTime / 100;
    const ref = setInterval(() => {
      percent++;
      this.percentEl.textContent = `${percent}%`;
      if (percent === 100) {
        clearInterval(ref);
        this.parent.removeChild(this.element);
      }
    }, interval);
  }
}
