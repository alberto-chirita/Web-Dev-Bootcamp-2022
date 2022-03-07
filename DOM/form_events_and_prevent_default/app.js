// const form = document.querySelector("#shelterForm");
// const input = document.querySelector("#catName");
// const list = document.querySelector("#cats");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const catName = input.value;
//   const newLi = document.createElement("li");
//   newLi.innerText = catName;
//   list.append(newLi);
//   input.value = "";
// });

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   const userInput = document.querySelector("#username");
  //   const tweetInput = document.querySelector("#tweet");
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(username.value, tweet.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  tweetsContainer.append(newTweet);
};
