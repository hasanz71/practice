let boktrita =
  "Hello Jonogon,  Welcome to VeJaaL. Amra apnader jonno niye eshechi valorant memes er poshora";

let count = 1;

for (let i = 0; i < boktrita.length; i++) {
  let character = boktrita[i];
  if (character == " " && boktrita[i - 1] != " ") {
    count++;
  }
}
console.log(`This has ${count} words`);
