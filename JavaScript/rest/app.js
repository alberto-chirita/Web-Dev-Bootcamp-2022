// function sum() {
//   return arguments.reduce((total, el) => total + el);
// }

// function sum(...nums) {
//   return nums.reduce((total, el) => total + el);
// }

// console.log(sum(1, 2, 3));

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
}

raceResults("Tammy", "Todd", "Tina", "Trevor", "Travis");
