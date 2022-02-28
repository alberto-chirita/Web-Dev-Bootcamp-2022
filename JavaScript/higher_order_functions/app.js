// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// // callTwice(rollDie);
// callTenTimes(rollDie);

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("CONGRATS, I AM A GOOD FUNCTION!");
//       console.log("YOU WIN A MILLION DOLLARS!!");
//     };
//   } else {
//     return function () {
//       alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//     };
//   }
// }

// const mystery = makeMysteryFunc();

// mystery();

function makeBetweenFunc(min, max) {
  const isBetween = function (num) {
    return num >= min && num <= max;
  };
  return isBetween;
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

const random = Math.floor(Math.random() * 120) + 1;

console.log(isSenior(random));

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//   return num >= 1 && num <= 10;
// }
