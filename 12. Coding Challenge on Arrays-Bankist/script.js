/*
const checkDogs = function (dogsJulia, dogsKate) {
  // Task 1
  let dogsJuliaCopy = dogsJulia.slice(0);

  dogsJuliaCopy = dogsJuliaCopy.splice(1, 2);

  // Task 2
  const allDogs = dogsJuliaCopy.concat(dogsKate);

  // Task 3
  allDogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


const calcAverageHumanAge = function (ages) {
  // Task 1
  const humanAge = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));

  // Task 2
  const adult = humanAge.filter((age) => age >= 18);

  // Task 3
  const average = adult.reduce((acc, age) => acc + age, 0) / adult.length;
  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


// Coding Challenge 3

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

// Coding Challenge #4

// Task 1
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((cur) => {
  cur.recommendedFood = Math.trunc(cur.weight ** 0.75 * 28);
});

console.log(dogs);

// Task 2
const dogSarah = dogs.find((cur) => cur.owners.includes("Sarah"));
console.log(dogSarah);

console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? "much" : "little"
  }`
);
