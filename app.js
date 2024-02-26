const express = require("express");
const app = express();
const mysql = require("mysql");
const pokemonController = require("./controllers/pokemonController");

// Connexion à la base de données
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pokemon_db",
  port: 8889,
});

app.set("connection", connection);

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Middleware pour servir les fichiers statiques du dossier public
app.use(express.static('public'));

// Routes pour l'API
app.get("/pokemons", pokemonController.getAllPokemons);
app.get("/pokemons/:id", pokemonController.getPokemonById);
app.post("/pokemons", pokemonController.addPokemon);
app.put("/pokemons/:id", pokemonController.updatePokemon);
app.delete("/pokemons/:id", pokemonController.deletePokemon);

// Ecoute du port
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Le serveur lancé sur le port ${PORT}`);
});

module.exports = app;
