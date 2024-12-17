// window.onload = function () {
//   const audio = document.getElementById("background-music");
//   audio.play();
// };

// HTML
const searchBar = document.querySelector("#Searchbar");
const submitButton = document.querySelector("#SubmitSearchButton");

// API
const apiEndpointPokemon = `https://pokeapi.co/api/v2/pokemon/`;
const apiEndpointPodedex = `https://pokeapi.co/api/v2/pokedex/national/`;

// Fetch Pokemon Func
async function pokeSearch(pokemon) {
  try {
    const result = await fetch(`${apiEndpointPokemon}${pokemon}`);
    const data1 = await result.json();
    pokedexDearch(data1);
  } catch (err) {
    console.error(err);
  }
}

async function pokedexDearch(data1) {
  try {
    const result = await fetch(`${apiEndpointPodedex}`);
    const data2 = await result.json();
    pokedexCleanup(data1, data2);
  } catch (err) {
    console.error(err);
  }
}

function pokedexCleanup(data1, data2) {
  const pokeID = data1.id - 1;
  console.log(pokeID);
  const data2Clean = data2.pokemon_entries[pokeID].pokemon_species;
  console.log(data2Clean);
  pokeResult(data1, data2Clean);
}

// Return Data
function pokeResult(data1, data2Clean) {
  console.log(data1);
  console.log(data1.name);
  console.log(`HP ${data1.stats[0].base_stat}`);
  console.log(`ATK ${data1.stats[1].base_stat}`);
  console.log(`DEF ${data1.stats[2].base_stat}`);
  console.log(`SP. ATK ${data1.stats[3].base_stat}`);
  console.log(`SP. DEF ${data1.stats[4].base_stat}`);
  console.log(`SPD ${data1.stats[5].base_stat}`);
  console.log(data2Clean.name);
}

// Search
submitButton.addEventListener("click", () => {
  pokeSearch(searchBar.value);
});

async function testFetch() {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokedex/national/`);
    const data = await result.json();
    console.log(data.pokemon_entries);
  } catch (err) {
    console.error(err);
  }
}
testFetch();
