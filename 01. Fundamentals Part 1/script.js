/*
// let js = "amazing";
// console.log(40 * 2);

// let firstName = "Jonas";
// console.log(firstName);

// Practice Assignments

let country = "Nigeria";
let continent = "Africa";
let population = 150000000;

console.log(country, continent, population);


// Data Types :String, Number, Boolean, undefined, null, Object, Symbols, BigInt

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun, typeof javascriptIsFun);

let year;
console.log(year, typeof year);

year = 1991;
console.log(year, typeof year);

console.log(typeof null);


// PRACTICE ASSIGNMENT DATA TYPES

let country = "Nigeria";
let continent = "Africa";
let population = 150000000;
let isIsland = false;
let language;

console.log(
  typeof country,
  typeof population,
  typeof isIsland,
  typeof language
);


// LET, CONST AND VAR. Always use const by default and only use let when you are really sure about changing it.

let age = 330;
age = 31;

const birthYear = 1991;
// birthYear = 1990

// const job

var job = "programmer";
job = "teacher";
console.log(job);

// Let, Const and Var Practice Assignment
let country = "Nigeria";
let continent = "Africa";
let population = 150000000;
const isIsland = false;
const language = "English";


// Basic Operators

// Math Operators

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison Operators - Used to generate Boolean values

console.log(ageJonas > ageSarah); // >, <, >= <=, >==, <==, ===
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operator Precedence
const now = 2037;
ageJonas = now - 1991;
ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// CODING CHALLENGE 1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2. *

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula
3. create aboolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test Data 1: Marks Weights 78kg and is 1.69m tall,
John weights 92kg and is 1.95m tall

Test Data 2: Marks weights 95kg and is 1.88m tall, John weights 85kg and is 1.76m tall.



// Solution to Coding Challenge 1;

// For Test Data 1
let massMark = 78;
let heightMark = 1.69;
let markBMI = massMark / heightMark ** 2;
console.log(markBMI);

let massJohn = 92;
let heightJohn = 1.95;
let johnBMI = massJohn / heightJohn ** 2;
console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// For Test Data 2
massMark = 95;
heightMark = 1.88;
markBMI = massMark / heightMark ** 2;
console.log(markBMI);

massJohn = 85;
heightJohn = 1.76;
johnBMI = massJohn / heightJohn ** 2;
console.log(johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


//  STRINGS AND TEMPLATE LITERALS

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

const jonas = `I'm ${firstName} a ${year - birthYear} years old ${job}!`;

console.log(jonas);


// Basic Operators Practice Assignment
const country = "Nigeria";
const continent = "Africa";
let myPopulation = 15;
const avgCountry = 33;
const language = "English";

const finlandPopulation = 6000000;
const isHigherFinland = myPopulation > finlandPopulation;

console.log(myPopulation / 2);
console.log(myPopulation++);
console.log(isHigherFinland);
console.log(myPopulation < avgCountry);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  myPopulation +
  " million people speak " +
  language;

console.log(description);

description = `${country} is in ${continent}, and its ${myPopulation} million people speak ${language}`;
console.log(description);


// Taking Decisions IF/Else Statement

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving License 😉");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years😢`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
  century = 21;
}
console.log(century);


// CODING CHALLENGE #2

let massMark = 78;
let heightMark = 1.69;
let markBMI = massMark / heightMark ** 2;
console.log(markBMI);

let massJohn = 92;
let heightJohn = 1.95;
let johnBMI = massJohn / heightJohn ** 2;
console.log(johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log("John's BMI is higher than Mark's");
}

// TYPE CONVERSION
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
// JS can only convert 2 to 3 types, to a Number, String or Boolean.

// TYPE COERCION
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" > "18");

// TRUTHY AND FALSY VALUES
// 5 FALSY VALUES:  0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(" "));

/* When does JS do type conversion to Boolean?
1. When a Logical operator is used
2. In a logical context (e.g If else statement)*/
/*
const money = 5;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 1;

if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

// EQUALITY OPERATORS == VS ===
