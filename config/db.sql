CREATE DATABASE IF NOT EXISTS pokemon_db;
USE pokemon_db;
CREATE TABLE IF NOT EXISTS pokemons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  type VARCHAR(24) NOT NULL
);
INSERT INTO pokemons (name, type)
VALUES ('Bulbizarre', 'Plante/Poison'),
  ('Herbizarre', 'Plante/Poison'),
  ('Florizarre', 'Plante/Poison'),
  ('Salamèche', 'Feu'),
  ('Reptincel', 'Feu'),
  ('Dracaufeu', 'Feu/Vol'),
  ('Carapuce', 'Eau'),
  ('Carabaffe', 'Eau'),
  ('Tortank', 'Eau'),
  ('Chenipan', 'Insecte');