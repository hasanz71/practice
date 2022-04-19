function factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
let result = factorial(3);
console.log(result);
