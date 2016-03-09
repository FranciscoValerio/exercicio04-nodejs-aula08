'use strict';

const http = require('http');
const url = require('url');
const Controller = require('./controller');

http.createServer((req, res) => {
  const url_parts = url.parse(req.url);

  switch(url_parts.pathname){
    case '/api/pokemons/create':
      Controller.create(req, res);
      break;
    case '/api/pokemons/retrieve':
      Controller.find(req, res);
      break;
    case '/api/pokemons/get':
      Controller.findOne(req, res);
      break;
    case '/api/pokemons/update':
      Controller.update(req, res);
      break;
    case '/api/pokemons/delete':
      Controller.remove(req, res);
      break;
    case '/api/pokemons/similar':
        Controller.findSimilar(req, res);
        break;
    case '/api/pokemons/search':
        Controller.search(req, res);
        break;
    default:
      res.end('ROTA NAO ENCONTRADA');
      break;
  }
}).listen(3000, () => {
  console.log('Servidor rodando em localhost:3000');
});
