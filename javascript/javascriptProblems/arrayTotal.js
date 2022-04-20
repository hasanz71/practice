function addMarks(arr) {
  let totalMarks = 0;
  for (i = 0; i < arr.length; i++) {
    totalMarks = totalMarks + arr[i];
  }
  return totalMarks;
}

let marks = [72, 54, 89, 35, 54, 87, 96, 41, 58, 78, 65];
let result = addMarks(marks);
console.log(result);
