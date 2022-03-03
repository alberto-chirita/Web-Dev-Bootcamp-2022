// const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!";
// }

// for (let link of allLinks) {
//   link.style.color = "rgb(0, 108, 134)";
//   link.style.textDecorationColor = "magenta";
//   link.style.textDecorationStyle = "wavy";
// }

// const firstBold = document.querySelector("b");
// const paragraph = firstBold.parentElement;

// console.log(paragraph);
// console.log(paragraph.children);
// console.log(paragraph.childElementCount);

// const squareImg = document.querySelector(".square");

// console.log(squareImg.previousSibling);
// console.log(squareImg.nextSibling);
// // the next sibling is not the next img because the browser transforms the white-space into a text node, so the next sibling is text (not a HTML element, it's a DOM node)

// console.log(squareImg.previousElementSibling);
// console.log(squareImg.nextElementSibling);

// create new DOM element
const newImg = document.createElement("img");

newImg.src =
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80";

newImg.classList.add("square");

// append the new element to the page
document.body.appendChild(newImg);

const newH3 = document.createElement("h3");

// newH3.innerText = "I am new!";
// document.body.appendChild(newH3);

newH3.append("I am new!");
document.body.append(newH3, "Also new text!!!");

const newB = document.createElement("b");

newB.append("Hi!");
newH3.prepend(newB);

const h2 = document.createElement("h2");
h2.append("Are adorable chickens");
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);
console.log(h1.nextElementSibling); // h2

const h3 = document.createElement("h3");
h3.append("I am h3");
h1.after(h3);

const firstLi = document.querySelector("li");
// const ul = firstLi.parentElement;
// ul.removeChild(firstLi);
firstLi.remove();
