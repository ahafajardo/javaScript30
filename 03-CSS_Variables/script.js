let root = document.documentElement;

const inputs = [...document.querySelectorAll(".controls input")];

inputs.map(input => input.addEventListener("input change", updateElements));

function updateElements() {
  switch (this.id) {
    case "blur":
      root.style.setProperty("--blurValue", `${this.value}px`);
      break;
    case "spacing":
      root.style.setProperty("--spacingValue", `${this.value}px`);
      break;
    case "base":
      root.style.setProperty("--baseColor", `${this.value}`);
      break;
    default:
      break;
  }
}
