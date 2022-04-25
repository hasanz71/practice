function woodCalculator(chair, table, bed) {
  let woodInChair = 1;
  let woodInTable = 3;
  let woodInBed = 5;
  let requiredWood =
    chair * woodInChair + table * woodInTable + bed * woodInBed;

  return requiredWood;
}
let result = woodCalculator(21, 3, 5);
console.log(result);
