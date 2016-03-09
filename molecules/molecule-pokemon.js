const mongoose      = require( 'mongoose' );
const Schema        = mongoose.Schema;
const timestemp     = require( '../plugins/timestemp' );

mongoose.connect( 'mongodb://localhost/mongoose-user-test' );

const name            = require( '../atoms/atom-name'    );
const attack          = require( '../atoms/atom-attack'  );
const defense         = require( '../atoms/atom-defense' );
const type            = require( '../atoms/atom-type'    );
//const strokesMolecule = require( '../molecules/molecule-strokes' );

function pokemonMolecule(){
   const strokesMolecule = new Schema({
      blow: String
   });

   const pokemonMolecule = new mongoose.Schema({
        name
      , attack
      , defense
      , type
      , strokes: [strokesMolecule]
   });

   pokemonMolecule.pre('save', function( next ){
      console.log('before save');
      next();
   });

   pokemonMolecule.post('save', doc => {
      console.log('%s has been saved', doc.name + "(" + doc.initial + ")" );
   });

   pokemonMolecule.plugin(timestemp);

   pokemonMolecule
   .virtual('initial')
   .get(function () {
     return this.name[0];
   });

   return mongoose.model('Pokemon', pokemonMolecule);
};

module.exports = exports = pokemonMolecule();
