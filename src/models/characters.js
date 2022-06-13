const rickAndMortyApi = require('../config/rickandmorty_api');

class Character {
  static async getCharacter(options) {
    const { data } = await rickAndMortyApi.get("/character", options);
    return data;
  }

  static async getCharactersByStatus(options) {
    const { data } = await rickAndMortyApi.get("/character", options);
    return data;
  }

  static async getCharactersBySpecies(options) {
    const { data } = await rickAndMortyApi.get("/character", options);
    return data;
  }

  static async getCharactersByOrigin(options) {
    const { data } = await rickAndMortyApi.get("/character", options);
    return data;
  }

  static async getCharactersByGender(options) {
    const { data } = await rickAndMortyApi.get("/character", options);
    return data;
  }

  static async getCharactersByName(options) {
    const { data } = await rickAndMortyApi.get("/character", options);
    return data;
  }

  static async getCharactersById(id) {
    const { data } = await rickAndMortyApi.get(`/character/${id}`);
    return data;
  }
}
  
module.exports = Character;