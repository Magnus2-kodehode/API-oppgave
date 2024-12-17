window.onload = function () {
  const audio = document.getElementById("background-music");
  audio.play();
};

// HTML
const searchBar = document.querySelector("#Searchbar");
const submitButton = document.querySelector("#SubmitSearchButton");

// API
const apiEndpoint = `https://pokeapi.co/api/v2/pokemon/`;

// Fetch Func
async function pokeSearch(pokemon) {
  try {
    const result = await fetch(`${apiEndpoint}${pokemon}`);
    const data = await result.json();
    pokeResult(data);
  } catch (err) {
    console.error(err);
  }
}

// Return Data
function pokeResult(data) {
  console.log(data);
  console.log(data.name);
  console.log(`HP ${data.stats[0].base_stat}`);
  console.log(`ATK ${data.stats[1].base_stat}`);
  console.log(`DEF ${data.stats[2].base_stat}`);
  console.log(`SP. ATK ${data.stats[3].base_stat}`);
  console.log(`SP. DEF ${data.stats[4].base_stat}`);
  console.log(`SPD ${data.stats[5].base_stat}`);
}

// To be hooked up to a searchbar later
// pokeSearch(searchBar.value);

// Search
submitButton.addEventListener("click", () => {
  pokeSearch(searchBar.value);
});
