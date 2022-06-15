//Arquivo contém as funções de busca de localidades
const Locations = require('../models/locations')
const FileSystem = require('../routes/file_system')
const { setResponse, getErrorResponse }= require('../utils/httpResponse')

// * tipo
// * dimensão OK
// * nome OK

class LocationController {
    static async getAllLocations(request, response) {
        try {
          const { page } = request.queryParams;
          const options = {
            params: {
              page: Number(page || 1),
            },
          };
          const locations = await Locations.getCharacter(options);
          response.writeHead(200);
          response.end(JSON.stringify(locations));
        } catch (error) {
          const { status, message } = getErrorResponse(error);
          response.writeHead(status);
          response.end(message);
        }
    }

    static async getLocationsByName(request, response) {
        try {
          const { name } = request.queryParams;
          const options = {
            params: {
              name
            },
          };
          if (!name) {
            response.writeHead(400);
            response.end("Hey Bro. Type any name of locations");
            return;
          };
          const locations = await Locations.getLocationsByName(options);
          response.writeHead(200);
          response.end(JSON.stringify(locations));
        } catch (error) {
          const { status, message } = getErrorResponse(error);
          response.writeHead(status);
          response.end(message);
        }
    }

    static async getLocationsByDimension(request, response) {
        try {
          const { dimension } = request.queryParams;
          const options = {
            params: {
                dimension
            },
          };
          if (!dimension) {
            response.writeHead(400);
            response.end("Hey Bro. Type any dimension");
            return;
          };
          const locations = await Locations.getLocationsByDimension(options);
          response.writeHead(200);
          response.end(JSON.stringify(locations));
        } catch (error) {
          const { status, message } = getErrorResponse(error);
          response.writeHead(status);
          response.end(message);
        }
    }

    static async getLocationsByType(request, response) {
        try {
          const { type } = request.queryParams;
          const options = {
            params: {
                type
            },
          };
          if (!type) {
            response.writeHead(400);
            response.end("Hey Bro. Type any type locations");
            return;
          };
          const locations = await Locations.getLocationsByType(options);
          response.writeHead(200);
          response.end(JSON.stringify(locations));
        } catch (error) {
          const { status, message } = getErrorResponse(error);
          response.writeHead(status);
          response.end(message);
        }
    }

};

module.exports = LocationController