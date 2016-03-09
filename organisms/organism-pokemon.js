'use strict';

const mongoose     = require('mongoose');
const Molecule     = require( './../molecules/molecule-pokemon');
const Organism     = mongoose.model( 'Pokemon', Molecule );
const create       = require( './../actions/action-create'  )(Organism);
const find         = require( './../actions/action-find'    )(Organism);
const findOne      = require( './../actions/action-findOne' )(Organism);
const update       = require( './../actions/action-update'  )(Organism);
const remove       = require( './../actions/action-remove'  )(Organism);
const findSimilar  = require( './../actions/action-findSimilar');
const search       = require( './../actions/action-search' );

const CRUD = {
  create
, find
, findOne
, update
, remove
, findSimilar
, search
};

module.exports = CRUD;
