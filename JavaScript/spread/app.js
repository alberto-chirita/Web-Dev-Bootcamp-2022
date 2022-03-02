const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

const max = Math.max(...nums); // Same as Math.max(13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456)
console.log(max);

const string = "hello";

console.log(string); // hello
console.log(...string); // h e l l o - Same as console.log('h', 'e', 'l', 'l', 'o');

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: "Feline" };
const canine = { isFurry: true, family: "Canine" };

const dog = { ...canine, isPet: true };
const catDog = { ...feline, ...canine }; // { legs: 4, family: "Canine", isFurry: true }

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
