// window.onload = function () {
//   const audio = document.getElementById("background-music");
//   audio.play();
// };

// HTML
const searchBar = document.querySelector("#Searchbar");
const submitButton = document.querySelector("#SubmitSearchButton");
const pokémonField = document.querySelector(".pokemonList");

// API
const apiEndpointPokemon = `https://pokeapi.co/api/v2/pokemon/`;
// const apiEndpointPodedex = `https://pokeapi.co/api/v2/pokedex/national/`;

// Fetch Pokemon Func
async function pokeSearch(pokemon) {
  try {
    const result1 = await fetch(`${apiEndpointPokemon}${pokemon}`);
    const data1 = await result1.json();
    pokeResult(data1);
  } catch (err) {
    console.error(err);
  }
}

// async function pokedexDearch(data1) {
//   try {
//     const result2 = await fetch(`${apiEndpointPodedex}`);
//     const data2 = await result2.json();
//     pokedexCleanup(data1, data2);
//   } catch (err) {
//     console.error(err);
//   }
// }

// function pokedexCleanup(data1, data2) {
//   const pokeID = data1.id - 1;
//   console.log(pokeID);
//   const data2Clean = data2.pokemon_entries[pokeID].pokemon_species;
//   console.log(data2Clean);
//   pokeResult(data1, data2Clean);
// }

// Return Data
function pokeResult(data1) {
  const pokéContainer = document.createElement("div");
  pokéContainer.classList.add("pokemon");
  const pokéImg = document.createElement("img");
  pokéImg.classList.add("pokemonImage");
  pokéImg.classList.add("pokemonItemPosition");
  pokéImg.src = data1.sprites.other["official-artwork"].front_default;
  const pokéID = document.createElement("p");
  pokéID.textContent = data1.id;
  pokéID.classList.add("pokemonNumber");
  pokéID.classList.add("pokemonItemPosition");
  const pokéName = document.createElement("p");
  pokéName.classList.add("pokemonName");
  pokéName.classList.add("pokemonItemPosition");
  const pokéType = document.createElement("p");
  pokéType.classList.add("pokemonType");
  pokéType.classList.add("pokemonItemPosition");
  const pokéHP = document.createElement("p");
  pokéHP.classList.add("pokemonHP");
  pokéHP.classList.add("pokemonItemPosition");
  const pokéATK = document.createElement("p");
  pokéATK.classList.add("pokemonAttack");
  pokéATK.classList.add("pokemonItemPosition");
  const pokéDEF = document.createElement("p");
  pokéDEF.classList.add("pokemonDefence");
  pokéDEF.classList.add("pokemonItemPosition");
  const pokéSpATK = document.createElement("p");
  pokéSpATK.classList.add("pokemonSpAtk");
  pokéSpATK.classList.add("pokemonItemPosition");
  const pokéSpDEF = document.createElement("p");
  pokéSpDEF.classList.add("pokemonSpDef");
  pokéSpDEF.classList.add("pokemonItemPosition");
  const pokéSPD = document.createElement("p");
  pokéSPD.classList.add("pokemonSpeed");
  pokéSPD.classList.add("pokemonItemPosition");
  console.log(data1);
  console.log(data1.name);
  console.log(`HP ${data1.stats[0].base_stat}`);
  console.log(`ATK ${data1.stats[1].base_stat}`);
  console.log(`DEF ${data1.stats[2].base_stat}`);
  console.log(`SP. ATK ${data1.stats[3].base_stat}`);
  console.log(`SP. DEF ${data1.stats[4].base_stat}`);
  console.log(`SPD ${data1.stats[5].base_stat}`);
  console.log(data1.sprites.other["official-artwork"].front_default);
  pokémonField.append(pokéContainer);
  pokéContainer.append(
    pokéImg,
    pokéID,
    pokéName,
    pokéType,
    pokéHP,
    pokéATK,
    pokéDEF,
    pokéSpATK,
    pokéSpDEF,
    pokéSPD
  );
}

// Search
submitButton.addEventListener("click", () => {
  pokeSearch(searchBar.value);
});

// async function testFetch() {
//   try {
//     const result = await fetch(`https://pokeapi.co/api/v2/pokedex/national/`);
//     const data = await result.json();
//     console.log(data.pokemon_entries);
//   } catch (err) {
//     console.error(err);
//   }
// }
// testFetch();
