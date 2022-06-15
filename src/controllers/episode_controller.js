//Arquivo contém as funções de busca de episódios
const Episodes = require('../models/episodes')
const FileSystem = require('../routes/file_system')
const { setResponse, getErrorResponse }= require('../utils/httpResponse')

// nome
// tag "episode". Ex.: { "episode":"S01E01" }

class EpisodeController {
  static async getAllEpisodes(request, response) {
    try {
      const { page } = request.queryParams;
      const options = {
        params: {
          page: Number(page || 1),
        },
      };
      const episodes = await Episodes.getAllEpisodes(options);
      response.writeHead(200);
      response.end(JSON.stringify(episodes));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

  static async getEpisodesByName(request, response) {
    try {
      const { name } = request.queryParams;
      const options = {
        params: {
          name,
        },
      };
      if (!name) {
        response.writeHead(400);
        response.end("Hey Bro. Type any name of episode");
        return;
      };
      const episodes = await Episodes.getEpisodesByName(options);
      response.writeHead(200);
      response.end(JSON.stringify(episodes));

    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

  static async getEpisodesByTag(request, response) {
    try {
      const { episode } = request.queryParams;
      const options = {
        params: {
          episode,
        },
      };
      if (!episode) {
        response.writeHead(400);
        response.end("Hey Bro. Type any tag");
        return;
      };
      const episodes = await Episodes.getEpisodesByTag(options);
      response.writeHead(200);
      response.end(JSON.stringify(episodes));

    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }
}

module.exports = EpisodeController