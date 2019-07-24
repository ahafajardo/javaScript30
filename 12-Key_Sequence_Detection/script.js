const secretCode = [..."corn"];
let inputCode = [];

window.addEventListener("keyup", handleKeys);

function handleKeys(e) {
  currentKey = e.key;
  inputCode.push(currentKey);
  partialMatch = inputCode.reduce((result, key, keyIndex) => key == secretCode[keyIndex], false);

  if (!partialMatch) inputCode = [];

  if (partialMatch && secretCode.length == inputCode.length) {
    cornify_add();
    inputCode = [];
  }
}
