'use strict';

const querystring = require( 'querystring' );

module.exports = (Organism) => { 
  return (req, res) => {
    let queryData = '';
    
    req.on('data', (data) => {
      queryData += data;
    });

    req.on('end', () => {
      const obj = querystring.parse(queryData);

      const blow = {
        blow: 'Atacar'
      };

      const OrganismPokemon = new Organism(obj);
      OrganismPokemon.strokes.push( blow );

      Organism.create(OrganismPokemon, (err, data) => {
        if (err) return console.log('Erro:', err);

        res.writeHead(200, {'Content-Type': 'application/json'});
        return res.end( 'Pokemon: ' + data.name + ' com a inicial (' + data.initial + '), inserido.' );
      });
    });
  };
};