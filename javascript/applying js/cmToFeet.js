function cmToFeet(cm) {
  let feet = cm / 30;
  return feet;
} // cm = centemeteres

let centimeters = [179, 189.5, 154.4, 184.3];
for (i = 0; i < centimeters.length; i++) {
  let result = cmToFeet(centimeters[i]);
  console.log(result);
}
