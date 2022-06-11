// //Arquivo contém as funções de busca de personagens
const Characters = require('../models/characters')
const FileSystem = require('../models/file_system')
const getErrorResponse = require('../utils/httpResponse')

//status: vivo morto
// espécie
// origem
// gênero
// por nome
// por id

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

    static async getCharacterByStatus(request, response) {
      try {
        const { status } = request.queryParams;
        const options = {
          params: {
            status 
          },
        };
        const characters = await Characters.getCharacterByStatus(options);
        response.writeHead(200);
        response.end(JSON.stringify(characters));
      } catch (error) {
        const { status, message } = getErrorResponse(error);
        response.writeHead(status);
        response.end(message);
      }
    }

};

module.exports = CharacterController;
