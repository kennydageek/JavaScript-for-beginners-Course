'use strict';

// const { forEachRight } = require("lodash");

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze( {
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200;
// console.log(spendingLimits)

const getLimit = (limits, user) => limits[user] ? limits[user] : 0;


// Pure function :D
const addExpense = function (state, limits, value, description, user='jonas') {
  const cleanUser = user.toLowerCase();

  const limit = getLimit(limits, cleanUser);

return value <= limit ? [...state, {value: -value, description, user:cleanUser}] : state
};

const newBudget1= addExpense(budget, spendingLimits, 10, 'Going to movies 🍿', 'Matilda');
console.log(newBudget1);
const newBudget2 = addExpense(newBudget1, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const CheckExpenses = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry;
  })
};


const finalBudget = CheckExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state.filter(entry => entry.value <= -bigLimit).map(entry => entry.description.slice(-2)).join('/');

  console.log(bigExpenses);
};


logBigExpenses(finalBudget, 500);