const game = {
  team1: "Bayern Munich",
  team2: "Borrusia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #3
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// Task 1
const events = gameEvents.values();
console.log(events);

const noRepeatEvents = new Set(events);
console.log(noRepeatEvents);
/*
// Coding Challenge #2

// Task 1
for (const [i, player] of game.scored.entries()) {
  console.log(`goal ${i + 1}: ${player}`);
}

// Task 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// Task 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game | team}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Task 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

// printGoals({});

// const players1 = [game.players[0]];
// console.log(players1);
// const players2 = [game.players[1]];
// console.log(players2);

// Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;

console.log(players1);
console.log(players2);

// For Bayern Munich create one variable ('gk') with the goalkeeper's
// name, and one array('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// Create an array 'all Players' containing all players of both teams (22 players);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Create a new array ('players1Final') containing the original
// team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Based on the game.odds object, create one variable for each odd

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// Write PrintGoals that receives an arbitrary number of player
// names(not an array) and prints each of them to the console

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

team1 < team2 && console.log("Team1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
*/
