let fib = [0, 1, 1];
function fibonacci(num) {
  for (i = 3; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

let result = fibonacci(15);
console.log(result);
