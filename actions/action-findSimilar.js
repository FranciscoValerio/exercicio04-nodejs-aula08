'use strict';

const mongoose = require( 'mongoose' );
const callback = require( './action-callback-http-200' );
const getQuery = require( './action-get-query-http' );

module.exports = ( require, response ) => {
	const query = getQuery( require );

	var pokemonMolecule = new mongoose.Schema( { type: String } );

  	pokemonMolecule.methods.findSimilarTypes = function (cb) {
    	return this.model( 'Pokemon2' ).find({ type: this.type }, cb);
  	}

  	var Organism = mongoose.model( 'Pokemon2', pokemonMolecule );
  	var type = new Organism( { type: 'grass' } );

  	type.findSimilarTypes( ( error, data ) => callback( error, data, response ) );
};