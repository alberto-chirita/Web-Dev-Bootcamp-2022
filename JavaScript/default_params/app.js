// // The Old Way
// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

// The New Way
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey there", punc = "!") {
  console.log(`${msg}, ${person}${punc}`);
}
