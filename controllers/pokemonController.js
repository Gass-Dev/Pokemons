const pokemonModel = require("../models/pokemonModel");

const {
  getAllPokemons,
  getPokemonById,
  addPokemon,
  updatePokemon,
  deletePokemon,
} = pokemonModel;

// Je récupère tous les Pokémon
exports.getAllPokemons = (req, res) => {
  const connection = req.app.get("connection");
  getAllPokemons(connection, (error, results) => {
    if (error) {
      res.status(500).json({
        message: "Une erreur s'est produite lors de la récupération des Pokémon.",
      });
    } else {
      res.json(results);
    }
  });
};

// Je récupère un Pokémon par son ID
exports.getPokemonById = (req, res) => {
  const connection = req.app.get("connection");
  const id = req.params.id;
  getPokemonById(connection, id, (error, result) => {
    if (error) {
      res.status(500).json({
        message: "Une erreur s'est produite lors de la récupération du Pokémon.",
      });
    } else if (!result) {
      res.status(404).json({ message: "Le Pokémon demandé n'a pas été trouvé." });
    } else {
      res.json(result);
    }
  });
};

// J'ajoute un nouveau Pokémon
exports.addPokemon = (req, res) => {
  const connection = req.app.get("connection");
  if (!name || !type) {
    return res
      .status(400)
      .json({ message: "Le nom et le type du Pokémon sont requis." });
  }

  addPokemon(connection, name, type, (error) => {
    if (error) {
      res.status(500).json({
        message: "Une erreur s'est produite lors de l'ajout du Pokémon.",
      });
    } else {
      res.status(201).json({ message: "Le Pokémon a été ajouté avec succès." });
    }
  });
};

// Je mets à jour un Pokémon
exports.updatePokemon = (req, res) => {
  const connection = req.app.get("connection");
  const id = req.params.id;
  const { name, type } = req.body;
  if (!name || !type) {
    return res
      .status(400)
      .json({ message: "Le nom et le type du Pokémon sont requis." });
  }

  updatePokemon(connection, id, name, type, (error) => {
    if (error) {
      res.status(500).json({
        message: "Une erreur s'est produite lors de la mise à jour du Pokémon.",
      });
    } else {
      res.json({ message: "Le Pokémon a été mis à jour avec succès." });
    }
  });
};

// Je supprime un Pokémon
exports.deletePokemon = (req, res) => {
  const connection = req.app.get("connection");
  const id = req.params.id;
  deletePokemon(connection, id, (error) => {
    if (error) {
      res.status(500).json({
        message: "Une erreur s'est produite lors de la suppression du Pokémon.",
      });
    } else {
      res.json({ message: "Le Pokémon a été supprimé avec succès." });
    }
  });
};
