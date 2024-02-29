document.addEventListener("DOMContentLoaded", function () {
  fetch("/pokemons")
    .then((response) => response.json())
    .then((data) => {
      const pokemonList = document.getElementById("pokemonList");
      data.forEach((pokemon) => {
        const listItem = document.createElement("li");
        listItem.textContent = pokemon.name + " - " + pokemon.type;
        pokemonList.appendChild(listItem);
      });
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des pokemons :", error)
    );
});
