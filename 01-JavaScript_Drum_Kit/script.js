document.querySelector("body").addEventListener("keydown", highlight);
document.querySelector("body").addEventListener("keydown", playSound);

document.querySelector("body").addEventListener("keyup", unhighlight);

function highlight(e) {
  let keyCode = e.which;
  let instruments = [...document.getElementsByClassName("key")];
  let activeInstr = instruments.filter(instrument => instrument.getAttribute("data-key") == keyCode)[0];
  activeInstr.classList.add("playing");
}
function unhighlight(e) {
  let keyCode = e.which;
  let instruments = [...document.getElementsByClassName("key")];
  let activeInstr = instruments.filter(instrument => instrument.getAttribute("data-key") == keyCode)[0];
  activeInstr.classList.remove("playing");
}
function playSound(e) {
  let keyCode = e.which;
  let instruments = [...document.getElementsByTagName("AUDIO")];
  let activeInstr = instruments.filter(instrument => instrument.getAttribute("data-key") == keyCode)[0];
  activeInstr.play();
  activeInstr.currentTime = 0;
}
