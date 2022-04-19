let fib = [0, 1];
function fibonacci(num) {
  let i = 2;
  while (i <= num) {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  }
  return fib;
}

let result = fibonacci(15);
console.log(result);
