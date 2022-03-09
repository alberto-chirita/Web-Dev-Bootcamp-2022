// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :(";
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement("li");
  newLi.innerText = jokeText;
  jokes.append(newLi);
};

button.addEventListener("click", addNewJoke);
