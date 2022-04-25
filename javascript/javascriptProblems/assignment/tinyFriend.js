let friends = ["Liton", "Evan", "Shozib", "Polash", "Hasib", "Rubel", "Adnan"];
let smallest = friends[0];
for (let i = 1; i < friends.length; i++) {
  if (smallest.length >= friends[i].length) {
    smallest = friends[i];
  }
}
console.log(smallest);
