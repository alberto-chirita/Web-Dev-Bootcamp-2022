const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// it fires whenever the input is changed and we click away
// input.addEventListener("change", function (e) {
//   console.log("Hello!");
// });

// it fires whenever the input changes
input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});
