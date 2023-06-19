class View {
  constructor() {
    this.mainContainerEl = document.querySelector("#main-container");

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = "This paragraph has been dynamically added by JavaScript!";
    this.mainContainerEl.append(p);
  }

  clearParagraphs() {
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => paragraph.remove());
  }
}

module.exports = View;
