const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector("textarea[name='text']").value;
speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach(option => option.addEventListener("change", setOption));
speakButton.addEventListener("click", speechRestart);
stopButton.addEventListener("click", speechRestart.bind(stopButton, false));

function populateVoices() {
  voices = speechSynthesis.getVoices();
  const voiceOptions = voices
    .filter(voice => voice.lang.includes("en"))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join("");
  voicesDropdown.innerHTML = voiceOptions;
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name == voicesDropdown.value);
  speechRestart();
}

function speechRestart(restart = true) {
  speechSynthesis.cancel();
  if (restart) speechSynthesis.speak(msg);
}

function setOption() {
  msg[this.name] = this.value;
  speechRestart();
}
