'use strict';

const querystring = require( 'querystring' );
const url         = require('url');

module.exports = ( require ) => {
  return querystring.parse( url.parse( require.url ).query );
};