function checkDuplicate(arr) {
  let filter = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let index = filter.indexOf(arr[i]);
    if (index == -1) {
      filter.push(element);
    }
  }
  return filter;
}

let marks = [1, 2, 3, 4, 5, 3, 6, 2, 1, 6, 7, 8, 9, 7, 5];

let result = checkDuplicate(marks);

console.log(marks);
console.log(result);
