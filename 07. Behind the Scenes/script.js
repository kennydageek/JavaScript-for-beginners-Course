'use strict';

// Working with The Scope Chain
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);


// Hoisting and TDZ {Variable Environment}

// Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Hoisting with Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);


// The This Keyword

// console.log(this); // This in the global scope

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1991); // this keyword is undefined in regular function call

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAgeArrow(1980); // Arrow Function do not get its own this keyword but a lexical this

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};

jonas.calcAge(); // When the this keyword is used as a method, it points to the object that is callling that method

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);

    // };
    // Solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      //   console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

// The arguments Keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
