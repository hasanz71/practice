let num = 12;
function checkPrime(num) {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}
let result = checkPrime(8);
console.log(result);
