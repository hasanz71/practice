function feetTomile(feet) {
  let mile = 5280; // 1 mile = 5280ft.
  let converted = feet / mile;
  return converted.toFixed(8);
}

let result = feetTomile(20);
console.log(result);
