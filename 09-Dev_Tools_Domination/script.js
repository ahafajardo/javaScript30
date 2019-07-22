const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello!");
// Interpolated
let noun = "man";
console.log(`Hey there! I'm a ⭐ ${noun}!`);
// Styled
console.log("%c Groovy!", "font-size: 50px");
// warning!
console.warn("Uhhhhhhhhhh...");
// Error :|
console.error("Wrong!");
// Info
console.info("Here's the correct answer...");
// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("q"), "What are ya, stupid?");
// clearing
//console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("Better");
console.count("Bird");
console.count("Better");
console.count("Bird");
console.count("Better");
console.count("Bird");
console.count("Better");
console.count("Bird");
console.count("Better");
console.count("Bird");
console.count("Better");
// timing
console.time("fetch from github");
fetch("https://api.github.com/users/ahafajardo")
  .then(res => res.json())
  .then(data => {
    console.timeEnd("fetch from github");
    console.log(data);
  });
// tables
console.table(dogs);
