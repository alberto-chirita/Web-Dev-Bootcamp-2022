// function singSong() {
//   console.log("DO");
//   console.log("RE");
//   console.log("MI");
// }

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

// function greet(firstName, lastName) {
//   console.log(`Hey there, ${firstName} ${lastName[0]}.`);
// }

// greet("Elvis", "Presley");

// function repeat(str, numTimes) {
//   let result = "";
//   for (let i = 0; i < numTimes; i++) {
//     result += str;
//   }
//   console.log(result);
// }

// repeat("$", 5);

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  let sum = x + y;
  return sum;
}

let answer1 = add(9, 4);
console.log(answer1);
let answer2 = add(9, "string");
console.log(answer2);
