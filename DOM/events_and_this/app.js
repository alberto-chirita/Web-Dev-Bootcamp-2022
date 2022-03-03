const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  const sum = r + b + g;
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

// for (let button of buttons) {
//   button.addEventListener("click", () => {
//     this.style.backgroundColor = makeRandomColor();
//     this.style.color = makeRandomColor();
//   });
// }

const h1s = document.querySelectorAll("h1");

// for (let h1 of h1s) {
//   h1.addEventListener("click", () => {
//     this.style.backgroundColor = makeRandomColor();
//     this.style.color = makeRandomColor();
//   });
// }

function colorize() {
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}

function mainFunction(elements) {
  for (let element of elements) {
    element.addEventListener("click", colorize);
  }
}

mainFunction(buttons);
mainFunction(h1s);
