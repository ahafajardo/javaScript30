window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

const words = document.querySelector(".words");

let p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", e => {
  const transcripts = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

  p.textContent = transcripts;

  if (transcripts.includes("clear notebook") && e.results[0].isFinal) return (words.innerHTML = "");
});

recognition.addEventListener("end", () => {
  recognition.start();
  p = document.createElement("p");
  words.appendChild(p);
});

recognition.start();
