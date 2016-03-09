'use strict';

const atom_created_at = require( '../atoms/atom-created_at'      );
const atom_update_at  = require( '../atoms/atom-update_at'       );
//const StrokesMolecule = require( '../molecules/molecule-strokes' );

function timestemp( molecule, options) {
  molecule.add( { created_at: atom_created_at   } );
  molecule.add( { update_at : atom_update_at    } );
  //molecule.add( { strokes   : [StrokesMolecule] } );
}

module.exports = timestemp;
