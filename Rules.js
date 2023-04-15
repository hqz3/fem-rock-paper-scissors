export class Rules {
  constructor() {
    this.element = document.querySelector(".rules");
    this.image = document.querySelector(".rules__image");
    this.button = document.querySelector(".rules-button");
    this.close = document.querySelector(".rules__close");

    // Show rules when "Rules" button is clicked
    this.button.addEventListener("click", (e) => {
      e.stopPropagation();
      this.show();
    });
    // Hide rules when X button is clicked
    this.close.addEventListener("click", (e) => {
      this.hide();
    });
    // Hide rules if clicking outside the modal
    document.addEventListener("click", (e) => {
      if (!e.target.closest("div")?.classList.contains("rules--show")) {
        this.hide();
      }
    });
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
