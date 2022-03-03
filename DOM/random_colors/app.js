const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  const sum = r + b + g;
  //   if (sum < 250) {
  //     h1.style.color = "white";
  //   }
  return `rgb(${r}, ${g}, ${b})`;
};
