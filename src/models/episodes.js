const rickAndMortyApi = require('../config/rickandmorty_api')

class Episode {
    static async getAllEpisodes(options) {
        const { data } = await rickAndMortyApi.get("/episode", options);
        return data;
    }

    static async getEpisodesByName(options) {
        const { data } = await rickAndMortyApi.get("/episode", options);
        return data;
    }

    static async getEpisodesByTag(options) {
        const { data } = await rickAndMortyApi.get("/episode", options);
        return data;
    }
}

module.exports = Episode;