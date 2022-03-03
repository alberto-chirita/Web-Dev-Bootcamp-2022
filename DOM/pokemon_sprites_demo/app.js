// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");

  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  const label = document.createElement("span");
  label.append(`#${i}`);

  pokemon.append(newImg, label);
  container.append(pokemon);
}
