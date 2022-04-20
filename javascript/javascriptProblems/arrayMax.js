let marks = [21, 54, 89, 35, 54, 87, 96, 32, 58, 78, 65];
let max = marks[0];
for (let i = 1; i < marks.length; i++) {
  if (marks[i] > max) {
    max = marks[i];
  }
}
console.log(max);
