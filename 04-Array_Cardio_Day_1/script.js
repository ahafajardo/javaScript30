// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let answer1 = inventors.filter(inventor => 1500 <= inventor.year && inventor.year < 1600);
console.table(answer1);
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let answer2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(answer2);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
/*  If inventor.year - nextInventor.year < 0, put inventor in front of nextInventor.
    If inventor.year - nextInventor.year > 0, put nextInventor in front of inventor.
    If inventor.year - nextInventor.year = 0, leave them in place.
*/
let answer3 = inventors.sort((inventor, nextInventor) => inventor.year - nextInventor.year);
console.table(answer3);
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let answer4 = inventors.reduce((totalYearsLived, inventor) => totalYearsLived + (inventor.passed - inventor.year), 0);
console.log(answer4);
// 5. Sort the inventors by years lived
let answer5 = inventors.sort(
  (inventor, nextInventor) => nextInventor.passed - nextInventor.year - (inventor.passed - inventor.year)
);
console.table(answer5);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
let answer6 = [...document.querySelectorAll("div.mw-category-group ul li a")];
answer6 = answer6.length
  ? answer6.map(link => link.innerText).filter(linkText => linkText.includes(" de "))
  : "Run the code from line 92 to line 96 on https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris";
console.log(answer6);
// 7. sort Exercise
// Sort the people alphabetically by first name
let answer7 = people.sort((name, nextName) =>
  name.split(", ")[1] == nextName.split(", ")[1] ? 0 : name.split(", ")[1] < nextName.split(", ")[1] ? -1 : 1
);
/*
  THIS is pretty dense, so here's the breakdown:
  1. Sort the people array
  2. Split the two names at the ", " and extract the second part, which contains the first names that we want to compare.
  2. To sort it, first check if the current first name is equivalent alphabetically to the next first name.
    a. If so, return 0 to leave the names alone, and go on to the next pair of names to sort. You're done!
    b. If not, go on to step 3.
  3. Split the two names at the ", " and extract the first part, which contains the first names that we want to compare.
  4. Check whether the first name goes before the next first name in alphabetical order
    a. If so, return -1 to move the first name in front of the next first name.
    b. If not, return 1 to move the next first name in front of the first name.
*/
console.log(answer7);
// let firstNameSort = people.sort((a, b) => {
//   const first = getFirstName(a);
//   const second = getFirstName(b);
//   return first >= second ? 1 : -1;
// });

// function getFirstName(name) {
//   return name.split(", ")[1];
// }

// console.log(firstNameSort);
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick"
];

let answer8 = data.reduce((obj, item) => {
  obj[item] ? obj[item]++ : (obj[item] = 1);
  return obj;
}, {});
/*
  If there is an property in the object for the current item we are counting, increment its value by one.
  Otherwise, initialize the current item count to 1. Then, return the object.
*/
console.log(answer8);
