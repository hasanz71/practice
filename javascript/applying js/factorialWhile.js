function factorial(num) {
  let i = 1;
  let fact = 1;
  while (i <= num) {
    fact = fact * i;
    i++;
  }
  return fact;
}
let result = factorial(10);
console.log(result);
