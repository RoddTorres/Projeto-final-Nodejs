//Arquivo responsável por conectar com a API
//configurar cliente

const axios = require("axios");

module.exports = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});
