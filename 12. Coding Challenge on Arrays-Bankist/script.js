const checkDogs = function (dogsJulia, dogsKate) {
  // Task 1
  let dogsJuliaCopy = dogsJulia.slice(0);

  dogsJuliaCopy = dogsJuliaCopy.splice(1, 3);

  // Task 2
  const allDogs = dogsJuliaCopy.concat(dogsKate);

  // Task 3
  allDogs.forEach(function (value, i) {
    if (value >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
