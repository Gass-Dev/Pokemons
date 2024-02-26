// Je récupère tous les Pokémon depuis la base de données
function getAllPokemons(connection, callback) {
  const query = "SELECT * FROM pokemons";
  connection.query(query, callback);
}

// Je récupère un Pokémon par son ID depuis la base de données
function getPokemonById(connection, id, callback) {
  const query = "SELECT * FROM pokemons WHERE id = ?";
  connection.query(query, [id], (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result[0]);
    }
  });
}

// J'ajoute un nouveau Pokémon dans la base de données
function addPokemon(connection, name, type, callback) {
  const query = "INSERT INTO pokemons (name, type) VALUES (?, ?)";
  connection.query(query, [name, type], callback);
}

// Je mets à mettre à jour un Pokémon dans la base de données
function updatePokemon(connection, id, name, type, callback) {
  const query = "UPDATE pokemons SET name = ?, type = ? WHERE id = ?";
  connection.query(query, [name, type, id], callback);
}

// Je supprime un Pokémon de la base de données
function deletePokemon(connection, id, callback) {
  const query = "DELETE FROM pokemons WHERE id = ?";
  connection.query(query, [id], callback);
}

module.exports = {
  getAllPokemons,
  getPokemonById,
  addPokemon,
  updatePokemon,
  deletePokemon,
};
