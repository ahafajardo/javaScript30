document.querySelector("body").addEventListener("keydown", highlight);
document.querySelector("body").addEventListener("keydown", playSound);

document.querySelector("body").addEventListener("keyup", unhighlight);

function highlight(e) {
  let keyCode = e.which;
  let instruments = [...document.querySelectorAll("div.key")];
  let activeInstr = instruments.find(instrument => instrument.getAttribute("data-key") == keyCode);
  if (activeInstr) activeInstr.classList.add("playing");
}
function unhighlight(e) {
  let keyCode = e.which;
  let instruments = [...document.querySelectorAll("div.key")];
  let activeInstr = instruments.find(instrument => instrument.getAttribute("data-key") == keyCode);
  if (activeInstr) activeInstr.classList.remove("playing");
}
function playSound(e) {
  let keyCode = e.which;
  let instruments = [...document.querySelectorAll("audio")];
  let activeInstr = instruments.find(instrument => instrument.getAttribute("data-key") == keyCode);
  if (activeInstr) {
    activeInstr.play();
    activeInstr.currentTime = 0;
  }
}
