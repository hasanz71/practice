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
    console.log("be rich first, idiot");
  } else if (buildingStorey <= 10) {
    totalBricks = 15 * buildingStorey * brick; // 15 ft. in first ten storey
  } else if (buildingStorey > 10 && buildingStorey <= 20) {
    totalBricks = 15 * 10 * brick + 12 * (buildingStorey - 10) * brick; // 12 ft. in 10 to 20 storey
  } else if (buildingStorey > 20) {
    totalBricks =
      15 * 10 * brick + 12 * 10 * brick + 10 * (buildingStorey - 20) * brick; // 10 ft. in 20+ storey
  }
  return totalBricks;
}
let result = brickCalculator(23);
console.log(result);
