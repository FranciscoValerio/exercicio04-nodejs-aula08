'use strict';

const callback    = require( './action-callback-http-200' );
const getQuery    = require( './action-get-query-http' );
const querystring = require( 'querystring' );

module.exports = (Organism) => {
	return ( require, response ) => {
  		let queryData = '';

  		require.on( 'data', (data) => {
    		queryData += data;
  		});

  		require.on( 'end', () => {
    		const query = getQuery( require );
    		const model = querystring.parse( queryData );

    		Organism.update( query, model, ( error, data) => callback( error, data, response ) );
  		});
	};
};