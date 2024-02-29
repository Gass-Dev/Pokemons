const express = require("express");
const app = express();
const mysql = require("mysql");
const pokemonController = require("./controllers/pokemonController");
const path = require("path");

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
app.use(express.static("public", {
  setHeaders: (res, path, stat) => {
    if (path.endsWith(".js")) {
      res.set("Content-Type", "application/javascript");
    }
  }
}));

// Routes pour l'API
app.get("/pokemons", pokemonController.getAllPokemons);
app.get("/pokemons/:id", pokemonController.getPokemonById);
app.post("/pokemons", pokemonController.addPokemon);
app.put("/pokemons/:id", pokemonController.updatePokemon);
app.delete("/pokemons/:id", pokemonController.deletePokemon);

// Route pour servir le formulaire depuis le dossier views
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

// Ecoute du port
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Le serveur lancé sur le port ${PORT}`);
});

module.exports = app;
