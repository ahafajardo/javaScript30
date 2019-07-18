document.querySelector("body").addEventListener("keydown", highlight);
document.querySelector("body").addEventListener("keydown", playSound);

document.querySelector("body").addEventListener("keyup", unhighlight);

function highlight(e) {
  let reqInstrument = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
  if (reqInstrument) reqInstrument.classList.add("playing");
}
function unhighlight(e) {
  let reqInstrument = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
  if (reqInstrument) reqInstrument.classList.remove("playing");
}
function playSound(e) {
  let reqInstrument = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (reqInstrument) {
    reqInstrument.play();
    reqInstrument.currentTime = 0;
  }
}
