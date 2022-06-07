const rickAndMortyapi = require('../config/rickandmorty_api')

class Character {
    static async getCharacter(options) {
      const { data } = await rickAndMortyApi.get("/character", options);
      return data;
    }
  
    static async getCharacterById(id) {
      const { data } = await rickAndMortyApi.get(`/character/${id}`);
      return data;
    }
  
    static async getCharacterByOrigin(id) {
      const { data } = await rickAndMortyApi.get(`/character`);
      return data;
    }
  }
  
  module.exports = Character;