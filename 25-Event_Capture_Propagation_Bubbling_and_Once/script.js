const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

// divs.forEach(div => div.addEventListener("click", logTextBubble));
// divs.forEach(div => div.addEventListener("click", logTextCapture, { capture: true }));
// divs.forEach(div => div.addEventListener("click", logTextStopPropagation));
divs.forEach(div => div.addEventListener("click", logTextStopPropagation, { capture: true }));
button.addEventListener("click", () => console.log("Clicked!"), { once: true });

function logTextBubble(e) {
  console.log(`${this.classList.value} Bubbling`);
}

function logTextCapture(e) {
  console.log(`${this.classList.value} Capturing`);
}

function logTextStopPropagation(e) {
  e.stopPropagation();
  console.log(`${this.classList.value} Propagation stopped`);
}
