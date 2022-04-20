//1
let a = 4;
let b = 7;
console.log(`before swap: a = ${a}, b = ${b}`);

let c = a;
a = b;
b = c;
console.log(`after swap: a = ${a}, b = ${b}`);

//2
let x = 4;
let y = 7;
console.log(`before swap: x = ${x}, y = ${y}`);
x = x + y;
y = x - y;
x = x - y;
console.log(`after swap: x = ${x}, y = ${y}`);

//3
let p = 4;
let q = 7;
console.log(`before swap: p = ${p}, q = ${q}`);

[p, q] = [q, p];
console.log(`after swap: p = ${p}, q = ${q}`);
