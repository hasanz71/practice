/*
 *1-10 storeyed building has 15 feet per storey.
 *11-20 storeyed building has 12 feet per storey after 10th storey.
 *20+ storeyed building has 10 feet per storey after 20th storey.
 *Every feet requires 1000 bricks
 *create a function which will take buildingStorey as parametere and will calculate how many bricks is needed to build that building
 */

function brickCalculator(buildingStorey) {
  let brick = 1000; //1 feet = 1000 bricks
  let totalBricks = 0;
  if (buildingStorey <= 0) {
    console.log("Be rich first, Idiot");
  } else if (buildingStorey <= 10) {
    totalBricks = 15 * buildingStorey * brick; // 15 ft. in first ten storey
  } else if (buildingStorey <= 20) {
    let firstPart = 15 * 10 * brick;
    let remaining = buildingStorey - 10;
    let secondPart = 12 * remaining * brick; // 12 ft. in 10 to 20 storey
    totalBricks = firstPart + secondPart;
  } else if (buildingStorey > 20) {
    let firstPart = 15 * 10 * brick;
    let secondPart = 12 * 10 * brick;
    let remaining = buildingStorey - 20;
    let thirdPart = 10 * remaining * brick; // 10 ft. in 20+ storey

    totalBricks = firstPart + secondPart + thirdPart;
  }
  return totalBricks;
}
let result = brickCalculator(25);
console.log(result);
