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

  static async getCharactersByOrigin(origin) {
    const options = {
      params : {
          origin
      }
    }

    const { data } = await rickAndMortyApi.get("/character");
    const originFilter = data.results.filter(data => data.origin.name.includes(origin));
    return originFilter;
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

  static async createCharactersFile(options) {
    const { data } = await rickAndMortyApi.get("/character", options);
    return data;
  }
}
  
module.exports = Character;