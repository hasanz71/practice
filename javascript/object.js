let player = {
  name: "Pedri",
  age: 19,
  position: "am",
  goals: 5,
  assists: 12,
};
console.log(player);

//accessing properties
console.log(player.age);
console.log(player["age"]);

//changing properties
player.age = 21;
console.log(player.age);

player["age"] = 22;
console.log(player.age);
