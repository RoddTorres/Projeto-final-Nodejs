const rickAndMortyApi = require('../config/rickandmorty_api')

class Location {
    static async getAllLocations(options) {
        const { data } = await rickAndMortyApi.get("/location", options);
        return data;
    }

    static async getLocationsByName(options) {
        const { data } = await rickAndMortyApi.get("/location", options);
        return data;
    }

    static async getLocationsByDimension(options) {
        const { data } = await rickAndMortyApi.get("/location", options);
        return data;
    }

    static async getLocationsByType(options) {
        const { data } = await rickAndMortyApi.get("/location", options);
        return data;
    }
}

module.exports = Location;