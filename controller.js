const Organism = require( './organisms/organism-pokemon' );

const CRUD = {
  create: Organism.create
, find: Organism.find
, findOne: Organism.findOne
, update: Organism.update
, remove: Organism.remove
, findSimilar: Organism.findSimilar
, search: Organism.search
};

module.exports = CRUD;
