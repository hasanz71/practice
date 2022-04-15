var players = [
  "drogo",
  "shadowshinoby",
  "saitama",
  "rebel",
  "wick",
  "stark",
  "bravo",
  "snow",
];

console.log(players);
console.log(players[3]);

players[3] = "korean";
let position = players.indexOf("korean");
console.log(position);

players.push("Bravo");
console.log(players);

players.unshift("snow");
console.log(players);

var kata = players.slice(2, 6);
console.log(kata);
