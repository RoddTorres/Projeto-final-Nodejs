//Responsável por configurar as rotas para cada método

const CharacterController = require("../controllers/character_controller");
const EpisodeController = require("../controllers/episode_controller");
const LocationController = require("../controllers/location_controller");

module.exports = {
  "/character": CharacterController.getAllCharacters,
  "/character-status": CharacterController.getCharactersByStatus,
  "/character-species": CharacterController.getCharactersBySpecies,
  "/character-origin": CharacterController.getCharactersByOrigin,
  "/character-gender": CharacterController.getCharactersByGender,
  "/character-name": CharacterController.getCharactersByName,
  "/character-id": CharacterController.getCharactersById,

  //Episodes
  "/episode": EpisodeController.getAllEpisodes,
  "/episode-name": EpisodeController.getEpisodesByName,
  "/episode-tag": EpisodeController.getEpisodesByTag,

  //Locations
  "/location": LocationController.getAllLocations,
  "/location-name": LocationController.getLocationsByName,
  "/location-dimension": LocationController.getLocationsByDimension,
  "/location-type": LocationController.getLocationsByDimension,
};
