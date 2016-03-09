const mongoose = require( 'mongoose' );
const Schema   = mongoose.Schema;
const blow     = require( '../atoms/atom-blow' );

const strokesMolecule = new Schema({
    blow: String
});

module.exports = strokesMolecule;
