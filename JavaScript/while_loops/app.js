// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const SECRET = "BabyHippo";
// let guess = prompt("Enter the secret code ...");
// while (guess !== SECRET) {
//   guess = prompt("Enter the secret code ...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!");

// let input = prompt("Hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLocaleLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!");

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if (i === 100) break;
// }

// Guessing Game
let maximum = parseInt(prompt("Welcome! Enter your max number:"));
while (!maximum) {
  maximum = prompt("Enter a valid number!");
}
const secretNumber = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;
let guess = prompt("Enter your first guess:");
while (guess != secretNumber) {
  if (guess === "q") {
    break;
  } else if (guess < secretNumber) {
    guess = prompt("Too Low! Guess Again:");
  } else {
    guess = prompt("Too High! Guess Again:");
  }
  attempts++;
}
if (guess === "q") {
  console.log("OKm YOU QUIT!");
} else {
  console.log("CONGRATS YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses.`);
}
