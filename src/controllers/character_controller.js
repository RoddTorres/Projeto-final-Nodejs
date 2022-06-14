// //Arquivo contém as funções de busca de personagens
const Characters = require('../models/characters')
const FileSystem = require('../routes/file_system')
const getErrorResponse = require('../utils/httpResponse')

//status: vivo morto OK
// espécie OK
// origem 
// gênero OK
// por nome OK
// por id OK

class CharacterController {
  static async getAllCharacters(request, response) {
      try {
        const { page } = request.queryParams;
        const options = {
          params: {
            page: Number(page || 1),
          },
        };
        const characters = await Characters.getCharacter(options);
        response.writeHead(200);
        response.end(JSON.stringify(characters));
      } catch (error) {
        const { status, message } = getErrorResponse(error);
        response.writeHead(status);
        response.end(message);
      }
  }

  static async getCharactersByStatus(request, response) {
    try {
      const { status } = request.queryParams;
      const options = {
        params: {
          status: status, 
        },
      };

      if (!["alive", "dead", "unknown"].includes(status)) {
        res.writeHead(400);
        res.end("Hey Bro. Status must be Alive, Dead or Unknown");
        return;
      }

      const characters = await Characters.getCharactersByStatus(options);
      response.writeHead(200);
      response.end(JSON.stringify(characters));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

  static async getCharactersBySpecies(request, response) {
    try {
      const { species } = request.queryParams;
      const options = {
        params: {
          species
        },
      };
      if (!species) {
        res.writeHead(400);
        res.end("Hey Bro. Type any species (Human, Humanoid, Alien)");
        return;
      }
      const characters = await Characters.getCharactersBySpecies(options);
      response.writeHead(200);
      response.end(JSON.stringify(characters));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

  static async getCharactersByOrigin(request, response) {
    try {
      const { origin } = request.queryParams;
      const characters = await Characters.getCharactersByOrigin();
      const results = characters["results"];

      const filtro = results.filter((char) => {
        return char["origin"]["name"] == origin;
      });

      response.writeHead(200);
      response.end(JSON.stringify(filtro));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

  static async getCharactersByGender(request, response) {
    try {
      const { gender } = request.queryParams;
      const options = {
        params: {
          gender
        },
      };
      if (!gender) {
        res.writeHead(400);
        res.end("Hey Bro. Type any gender (Female, Male, Genderless, Unknown)");
        return;
      }
      const characters = await Characters.getCharactersByGender(options);
      response.writeHead(200);
      response.end(JSON.stringify(characters));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

  static async getCharactersByName(request, response) {
    try {
      const { name } = request.queryParams;
      const options = {
        params: {
          name
        },
      };
      if (!name) {
        res.writeHead(400);
        res.end("Hey Bro. Type any name");
        return;
      }
      const characters = await Characters.getCharactersByName(options);

      response.writeHead(200);
      response.end(JSON.stringify(characters));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

  static async getCharactersById(request, response) {
    try {
      const { id } = request.queryParams;
      if (!id) {
        res.writeHead(400);
        res.end("Hey Bro. Type a number as ID");
        return;
      }
      const characters = await Characters.getCharactersById(id);
      response.writeHead(200);
      response.end(JSON.stringify(characters));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

  static async createCharactersName(request, response) {
    try {
      const { name } = request.queryParams;
      const options = {
        params: {
          name
        },
      };
       if (!name) {
        res.writeHead(400);
        res.end("Hey Bro. Type any name");
        return;
      }
      const characters = await Characters.getCharactersByName(options);
      const { results } = characters;
      await FileSystem.writeFile(results);

      await response.writeHead(200);
      await response.end(JSON.stringify(personagensName));
    } catch (error) {
      const { status, message } = getErrorResponse(error);
      response.writeHead(status);
      response.end(message);
    }
  }

};

module.exports = CharacterController;
