//Arquivo responsável por conectar com a API
//configurar cliente

const axios = require("axios");

const rickAndMortyApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

module.exports = rickAndMortyApi;