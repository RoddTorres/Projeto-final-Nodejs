# :rocket: Projeto-final-Nodejs (Rick and Morty) 

Este trabalho foi desenvolvido para o Módulo 6 - Técnicas de Programação I (NoseJS), do curso Web Full Stack da escola Let's Code. 


## :vertical_traffic_light: Começando 

Para executar o projeto é necessário:

* NodeJs 16.10 ou superior
* Axios 0.27.2
* Para testar as requisições: Postman/ Insomnia/ Extensão: Thunder Cliente (vscode) e etc.

Siga as instruções:

### :minidisc: Instalação

    **Axios:**
    * Abra o terminal e execute o comando:
    ```
    npm axios install
    ```

    *Digite o comando, no terminal, para inicializar o servidor: 
```
node index.js
```
  
  *URL base estará rodando localmente em:

```
http://localhost:3000
```

## :hammer: Estrutura

* É possível consultar informações sobre a API da série, como:
 - Personagens(character):
 "/character": Listar os personagens e permitir o uso de PAGINAÇÃO
  "/character-status": Listar os personagens por status (Vivo ou morto)
  "/character-species": Listar os personagens por espécie
  "/character-origin": Listar personagens por origem
  "/character-gender": Listar personagens por gênero
  "/character-name": Buscar personagem por nome
  "/character-id": Buscar personagem por id
  "/character-file": Buscar personagem por gênero

 - Episódios (episode):  
 "/episode": Listar episódio e permitir o uso de PAGINAÇÃO
  "/episode-name": Buscar episódio por nome
  "/episode-tag": Buscar episódio pela tag "episode"
 
 - Locais(location)
  "/location":  Listar Locais e permitir o uso de PAGINAÇÃO
  "/location-name": Buscar locais por nome
  "/location-dimension": Listar locais por dimensão
  "/location-type": Listar locais por tipo

## Executar os testes

- Na barra lateral esquerda, selecione uma das requisições pré-configuradas;
- Selecione um dos itens da lista e clique em "Send";


## Versão

1.8.2 2022

## Autores

* **Aline Alencar** - [Github](https://github.com/Alinevitalino)
* **João Victor** - [Github](https://github.com/jooovictor)
* **Marcos Lucindo** - [Github](https://github.com/MarquinhosLucindo)
* **Rodrigo Torres**  - [Github](https://github.com/RoddTorres)

See also the list of [contributors](https://github.com/esdrasac/chatbot/blob/master/CONTRIBUTORS.md) who participated in this project.

## Licença

Pública.

## Agradecimentos

* Ao nosso professor Esdras, por todo conhecimento e companheirismo durante o modúlo.