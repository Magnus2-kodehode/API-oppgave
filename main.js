// window.onload = function () {
//   const audio = document.getElementById("background-music");
//   audio.play();
// };

// HTML
const searchBar = document.querySelector("#Searchbar");
const submitButton = document.querySelector("#SubmitSearchButton");
const pokémonField = document.querySelector(".pokemonList");
const sortBy = document.querySelector(".sortByDropdownContent");

let pokéList = [];

// API
const apiEndpointPokemon = `https://pokeapi.co/api/v2/pokemon/`;
const apiEndpointPodedex = `https://pokeapi.co/api/v2/pokedex/national/`;
const apiEndpointSpecies = `https://pokeapi.co/api/v2/pokemon-species/`;

// Fetch Pokemon Func
async function pokeSearch(pokemon) {
  try {
    const result1 = await fetch(
      `${apiEndpointPokemon}${pokemon.replace(/ /g, "-")}`
    );
    const data1 = await result1.json();
    // pokeResult(data1);
    // pokedexSearch(data1);
    pokeSpeciesSearch(data1);
  } catch (err) {
    console.error(err);
  }
}

// async function pokedexSearch(data1) {
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

async function pokeSpeciesSearch(data1) {
  try {
    const result2 = await fetch(`${apiEndpointSpecies}${data1.id}`);
    const data2 = await result2.json();
    pokeResult(data1, data2);
  } catch (err) {
    console.error(err);
  }
}

// Return Data
function pokeResult(data1, data2) {
  // Shiny RNG
  const shinyChance = Math.random();
  let shinyBool = false;
  if (shinyChance > 0.95) {
    shinyBool = true;
  }
  // Pokémon Box
  const pokéContainer = document.createElement("div");
  pokéContainer.classList.add("pokemon");
  pokéList.push(pokéContainer);
  // Image
  const pokéImg = document.createElement("img");
  pokéImg.classList.add("pokemonImage");
  pokéImg.classList.add("pokemonItemPosition");
  if (shinyBool === true) {
    pokéImg.src = data1.sprites.other["official-artwork"].front_shiny;
  } else {
    pokéImg.src = data1.sprites.other["official-artwork"].front_default;
  }
  // ID
  const pokéID = document.createElement("p");
  pokéID.textContent = data1.id;
  pokéID.classList.add("pokemonNumber");
  pokéID.classList.add("pokemonItemPosition");
  // Name
  const pokéName = document.createElement("p");
  pokéName.textContent = data1.name;
  pokéName.classList.add("pokemonName");
  pokéName.classList.add("pokemonItemPosition");
  // Type
  const pokéType = document.createElement("p");
  pokéType.textContent = data1.types[0].type.name;
  pokéType.classList.add("pokemonType");
  pokéType.classList.add("pokemonItemPosition");
  // Base HP
  const pokéHP = document.createElement("p");
  pokéHP.textContent = data1.stats[0].base_stat;
  pokéHP.classList.add("pokemonHP");
  pokéHP.classList.add("pokemonItemPosition");
  // Base ATK
  const pokéATK = document.createElement("p");
  pokéATK.textContent = data1.stats[1].base_stat;
  pokéATK.classList.add("pokemonAttack");
  pokéATK.classList.add("pokemonItemPosition");
  // Base DEF
  const pokéDEF = document.createElement("p");
  pokéDEF.textContent = data1.stats[2].base_stat;
  pokéDEF.classList.add("pokemonDefence");
  pokéDEF.classList.add("pokemonItemPosition");
  // Base Sp. ATK
  const pokéSpATK = document.createElement("p");
  pokéSpATK.textContent = data1.stats[3].base_stat;
  pokéSpATK.classList.add("pokemonSpAtk");
  pokéSpATK.classList.add("pokemonItemPosition");
  // Base Sp. DEF
  const pokéSpDEF = document.createElement("p");
  pokéSpDEF.textContent = data1.stats[4].base_stat;
  pokéSpDEF.classList.add("pokemonSpDef");
  pokéSpDEF.classList.add("pokemonItemPosition");
  // Base SPD
  const pokéSPD = document.createElement("p");
  pokéSPD.textContent = data1.stats[5].base_stat;
  pokéSPD.classList.add("pokemonSpeed");
  pokéSPD.classList.add("pokemonItemPosition");
  // Desc
  const pokéDesc = document.createElement("p");
  pokéDesc.textContent = data2.flavor_text_entries[0].flavor_text;
  pokéDesc.classList.add("erlendSinTing");
  pokéDesc.classList.add("pokemonItemPosition");
  // Log
  console.log(data1);
  console.log(data2.flavor_text_entries[0].flavor_text);
  // console.log(data1.name);
  // console.log(data1.types[0].type.name);
  // console.log(`HP ${data1.stats[0].base_stat}`);
  // console.log(`ATK ${data1.stats[1].base_stat}`);
  // console.log(`DEF ${data1.stats[2].base_stat}`);
  // console.log(`SP. ATK ${data1.stats[3].base_stat}`);
  // console.log(`SP. DEF ${data1.stats[4].base_stat}`);
  // console.log(`SPD ${data1.stats[5].base_stat}`);
  // console.log(data1.sprites.other["official-artwork"].front_default);
  // Append
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
    pokéSPD,
    pokéDesc
  );
  console.log(pokéList);
}

function sort(arr) {
  return arr.sort((a, b) => {
    if (sortBy.value == "# ascending") {
      return b.id.localeCompare(a.id);
    } else if (sortBy.value == "# descending") {
      return a.id.localeCompare(b.id);
    } else if (sortBy.value == "Name ascending") {
      return b.name.localeCompare(a.name);
    } else if (sortBy.value == "Name descending") {
      return a.name.localeCompare(b.name);
    }
  });
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

// TESTING SORTING BUTTONS

// Sorting function for strings
// function sortStrings(attribute, ascending = true) {
//   const pokemonList = Array.from(document.querySelectorAll(".pokemon"));

//   pokemonList.sort((a, b) => {
//     const valueA = a.querySelector(`.${attribute}`).textContent.toLowerCase();
//     const valueB = b.querySelector(`.${attribute}`).textContent.toLowerCase();

//     if (ascending) {
//       return valueA.localeCompare(valueB); // Ascending
//     } else {
//       return valueB.localeCompare(valueA); // Ascending
//     }
//   });

//   // Reorder the list based on sorted results
//   const pokemonContainer = document.querySelector(".pokemonList");
//   pokemonList.forEach((pokemon) => {
//     pokemonContainer.appendChild(pokemon); // Reattach in sorted order
//   });
// }

// // Sorting function for numbers
// function sortPokemons(attribute, ascending = true) {
//   const pokemonList = Array.from(document.querySelectorAll(".pokemon"));

//   pokemonList.sort((a, b) => {
//     const valueA = a.querySelector(`.${attribute}`).textContent;
//     const valueB = b.querySelector(`.${attribute}`).textContent;

//     if (ascending) {
//       return valueA - valueB; // Ascending
//     } else {
//       return valueB - valueA; // Descending
//     }
//   });

//   // Reorder the list based on sorted results
//   const pokemonContainer = document.querySelector(".pokemonList");
//   pokemonList.forEach((pokemon) => {
//     pokemonContainer.appendChild(pokemon); // Reattach in sorted order
//   });
// }

// // Event listeners
// document.querySelectorAll(".arrow2").forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const direction = event.target.closest("button").contains(event.target)
//       ? "up"
//       : "down";

//     // Determine if the button is up or down for sorting direction
//     const column = event.target.closest(".pokemonListItemPosition");
//     const attribute = column.classList[0].toLowerCase(); // Get the attribute to sort by
//     const ascending = direction === "up";

//     // Choose appropriate sorting method
//     if (attribute === "pokemonname" || attribute === "pokemontype") {
//       sortStrings(attribute, ascending); // String sorting
//     } else {
//       sortPokemons(attribute, ascending); // Number sorting
//     }
//   });
// });

// // Sorting on load (optional)
// window.onload = function () {
//   sortStrings("pokemonname", true);
// };

// // TEST TING NR. 2

// // Array of pokemons
// // let pokéList = [];

// // Sorting function

// // Event listener for sorting buttons
// const sortButtons = document.querySelectorAll(".arrow2");
// sortButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const sortBy = event.target.closest("button").getAttribute("data-sort");
//     const direction = event.target.querySelector("img").src.includes("up")
//       ? "asc"
//       : "desc";

//     sortPokemons(sortBy, direction);
//   });
// });
