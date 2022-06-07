//Responsável por configurar as rotas para cada método

const RickAndMortyController = require("../controllers/character_controller");

module.exports = {
  "/character": RickAndMortyController.getPokemonById,
  "/location": RickAndMortyController.getPokemonByName,
  "/episode": RickAndMortyController.listPokemons,
};
