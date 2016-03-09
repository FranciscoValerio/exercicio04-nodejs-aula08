'use strict';

const mongoose = require( 'mongoose' );
const callback = require( './action-callback-http-200' );

module.exports = ( require, response ) => {

   	var pokemonMolecule = new mongoose.Schema( { name: String } );

   	pokemonMolecule.statics.search = function (name, cb) {
    	return this.where('name', new RegExp(name, 'i')).exec(cb);
   	};

   	const Organism = mongoose.model('Pokemon3', pokemonMolecule);
	Organism.search('francisco', ( error, data ) => callback( error, data, response ) );
};
