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

// Coding Challenge #2

// Task 1
for (const goals of game.scored.entries()) {
  console.log(`goal ${goals[0] + 1}: ${goals[1]}`);
}

/*
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
