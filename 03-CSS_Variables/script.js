let blurRange = document.querySelector("#blur");
let blurValue = blurRange.value;
blurRange.addEventListener("input", updateBlur);

let spacingRange = document.querySelector("#spacing");
let spacingValue = spacingRange.value;
spacingRange.addEventListener("input", updateSpacing);

let baseColorSelect = document.querySelector("#base");
let baseColorValue = baseColorSelect.value;
baseColorSelect.addEventListener("input", updateBaseColor);

let root = document.documentElement;

function updateBlur() {
  blurValue = blurRange.value;
  root.style.setProperty("--blurValue", `${blurValue}px`);
}

function updateSpacing() {
  spacingValue = spacingRange.value;
  root.style.setProperty("--spacingValue", `${spacingValue}px`);
}

function updateBaseColor() {
  baseColorValue = baseColorSelect.value;
  root.style.setProperty("--baseColor", `${baseColorValue}`);
}
