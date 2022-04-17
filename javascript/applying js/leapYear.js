function leapyear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

let years = [1800, 1845, 1940, 2000, 2032, 2100, 4000];

for (i = 0; i < years.length; i++) {
  leapyear(years[i]);
}
