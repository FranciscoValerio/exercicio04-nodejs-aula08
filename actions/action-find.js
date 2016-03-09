'use strict';

const getQuery = require( './action-get-query-http'    );
const callback = require( './action-callback-http-200' );

module.exports = (Organism) => {
	return ( require, response ) => {
  		const query = getQuery( require );

		Organism.find( query, ( error, data ) => callback( error, data, response ) );
	};
};