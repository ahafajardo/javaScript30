const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let score = 0;
let gameOver = false;

let previousHole;

moles.forEach(mole => mole.addEventListener("click", bonk));

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];

  if (hole === previousHole) return randomHole(holes);

  previousHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!gameOver) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
  gameOver = false;
  peep();
  setTimeout(() => (gameOver = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  this.classList.remove("up");
  score++;
  scoreBoard.textContent = score;
}
