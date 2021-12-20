//Using Strict mode
/*
'use strict';

let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive :D");

//
function logger() {
  console.log("My name is Jonas");
}
// calling/running/ invoking the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);


// Function assignment

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const myCountry = describeCountry("Finland", 6, "Helsinki");

console.log(myCountry);



// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow Function

const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));


// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


// Functions: Assignment

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const perChina1 = percentageOfWorld1(1441);
const perNigeria1 = percentageOfWorld1(150);
const perCanada1 = percentageOfWorld1(16);

console.log(perChina1, perNigeria1, perCanada1);

function percentageOfWorld2(population) {
  return (population / 7900) * 100;
}

const perChina2 = percentageOfWorld2(1441);
const perNigeria2 = percentageOfWorld2(150);
const perCanada2 = percentageOfWorld2(16);

console.log(perChina2, perNigeria2, perCanada2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const perChina3 = percentageOfWorld3(1441);
const perNigeria3 = percentageOfWorld3(150);
const perCanada3 = percentageOfWorld3(16);

console.log(perChina3, perNigeria3, perCanada3);


// Coding Challenge #5

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const avgKoalas = calcAverage(23, 34, 27);
const avgDolphins = calcAverage(85, 54, 41);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No team wins`);
  }
};

checkWinner(avgDolphins, avgKoalas);


// ARRAYS
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // Gets the last element of an array

friends[2] = "Jay";
console.log(friends);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];


// Some Useful Array Methods

// Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(newLength);
console.log(friends);

friends.unshift("John");
console.log(friends);

// Remove elements

friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

// Coding Challenge #6
const calcTip = function (bill) {
  let tip;
  if (bill > 50 && bill < 300) {
    tip = 0.15 * bill;
    return tip;
  } else {
    tip = 0.2 * bill;
    return tip;
  }
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills, tips, total);

// Introduction to Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"]
};


// The DOT vs Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you wnat to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// DOT vs Bracket Notation in Adding New Properties

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Exercise
// 'Jonas has 3 friends, and his best friend is called Michael'

const aboutJonas = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
console.log(aboutJonas);


// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge(this.birthYear));
console.log(jonas.getSummary());


// Coding Challenge #7

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`
  );
} else if (john.calcBMI() < mark.calcBMI) {
  console.log(
    `John's BMI (${mark.calcBMI()}) is higher than Mark's (${john.calcBMI()})`
  );
}


// ITERATION: The "For" loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// Looping Arrays, Breaking and Continuing

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i <= jonas.length - 1; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = types of jonas[i];

  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  2037 - years[i];

  ages.push(2037 - years[i]);
}

console.log(ages);

// Continue and Break keyword
console.log("....ONLY STRINGS....");

for (let i = 0; i <= jonas.length - 1; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("...... BREAK WITH NUMBER .....");
for (let i = 0; i <= jonas.length - 1; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}


// Looping Backwards and Loops in loops

// looping backwards
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

// Loops in loops

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`..... Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} `);
  }
}


// ITERATION: The 'While' loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep} `);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weight repetition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("Loop is about to end...");
}


// Coding Challenge #8

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let total = [];
const calcTip = function (bills) {
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] >= 50 && bills[i] <= 200) {
      tips[i] = 0.15 * bills[i];
      total[i] = bills[i] + tips[i];
    } else {
      tips[i] = 0.2 * bills[i];
      total[i] = bills[i] + tips[i];
    }
  }
  console.log(bills);
  console.log(tips);
  console.log(total);
};

calcTip(bills);

// A function that calculates the average number in an array.
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;

  return average;
};

console.log(calcAverage(total));
*/
