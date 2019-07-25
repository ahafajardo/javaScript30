// start with strings, numbers and booleans
let age1 = 100;
let age2 = age1;
console.log({ age1 }, { age2 });
age1 = 200;
console.log({ age1 }, { age2 });

let name1 = "Mario";
let name2 = name1;
console.log({ name1 }, { name2 });
name1 = "Luigi";
console.log({ name1 }, { name2 });

let bool1 = true;
let bool2 = bool1;
console.log({ bool1 }, { bool2 });
bool1 = false;
console.log({ bool1 }, { bool2 });

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:
const playersCopy1 = players;
// however what happens when we update that array?
playersCopy1[0] = "West";
// now here is the problem!
console.log({ players }, { playersCopy1 });
// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const playersCopy2 = players.slice();
playersCopy2[1] = "South";
console.log({ players }, { playersCopy2 });
// or create a new array and concat the old one in
const playersCopy3 = [].concat(players);
playersCopy3[2] = "Ruble";
console.log({ players }, { playersCopy3 });
// or use the new ES6 Spread
const playersCopy4 = [...players];
playersCopy4[3] = "Peridot";
console.log({ players }, { playersCopy4 });
//or use Array.from()
const playersCopy5 = Array.from(players);
playersCopy5[0] = "Weston";
console.log({ players }, { playersCopy5 });
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80
};

// and think we make a copy:
const personCopy1 = person;
personCopy1.name = "West Boston";
console.log(person, personCopy1);
// how do we take a copy instead?
const personCopy2 = Object.assign({}, person);
personCopy2.name = "North Dakota";
console.log(person, personCopy2);
// We will hopefully soon see the object ...spread
const personCopy3 = { ...person };
personCopy3.name = "South Canada";
console.log(person, personCopy3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const easel = {
  name: "Easel",
  age: 40,
  social: {
    twitter: "@easel",
    github: "canvasCarrier"
  }
};

const easelCopy1 = { ...easel };
easelCopy1.name = "Exposé";
easelCopy1.social.github = "dryEraser";
console.log(easel, easelCopy1);
// JSON.parse( JSON.stringify ) is another option that can deep clone.

const easelCopy2 = JSON.parse(JSON.stringify(easel));
easelCopy2.name = "Hagoromo";
easelCopy2.social.twitter = "bungu";
easelCopy2.social.github = "chalkDustBuster";
console.log(easel, easelCopy2);
