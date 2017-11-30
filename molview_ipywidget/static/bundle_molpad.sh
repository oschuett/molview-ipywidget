#!/bin/bash

# poor man's way of wrapping files into RequireJS

cat > molpad.js << EndOfMessage
//generated by bundle_molpad.sh

define(function(require) {

var jQuery = require('jquery');
var $ = jQuery;

EndOfMessage

#cat ../../src/js/chem/prototype.js            >> molpad.js
#cat ../../src/js/chem/util/common.js          >> molpad.js
#cat ../../src/js/chem/util/vec2.js            >> molpad.js
#cat ../../src/js/chem/util/set.js             >> molpad.js
#cat ../../src/js/chem/util/map.js             >> molpad.js
#cat ../../src/js/chem/util/pool.js            >> molpad.js
#cat ../../src/js/chem/chem/element.js         >> molpad.js
#cat ../../src/js/chem/chem/struct.js          >> molpad.js
#cat ../../src/js/chem/chem/molfile.js         >> molpad.js
#cat ../../src/js/chem/chem/sgroup.js          >> molpad.js
#cat ../../src/js/chem/chem/struct_valence.js  >> molpad.js
#cat ../../src/js/chem/chem/dfs.js             >> molpad.js
#cat ../../src/js/chem/chem/cis_trans.js       >> molpad.js
#cat ../../src/js/chem/chem/stereocenters.js   >> molpad.js
#cat ../../src/js/chem/chem/smiles.js          >> molpad.js

cat ../../src/Data.js                      >> molpad.js
cat ../../src/MolPad.js                    >> molpad.js
cat ../../src/MPAtom.js                    >> molpad.js
cat ../../src/MPBond.js                    >> molpad.js
cat ../../src/MPFragments.js               >> molpad.js
cat ../../src/MPLine.js                    >> molpad.js
cat ../../src/MPMolecule.js                >> molpad.js
cat ../../src/MPPoint.js                   >> molpad.js
cat ../../src/MPSelection.js               >> molpad.js
cat ../../src/Utility.js                   >> molpad.js

#cat ../../src/js/molpad/Data.js               >> molpad.js
#cat ../../src/js/molpad/Utility.js            >> molpad.js
#cat ../../src/js/molpad/MPPoint.js            >> molpad.js
#cat ../../src/js/molpad/MPLine.js             >> molpad.js
#cat ../../src/js/molpad/MPFragments.js        >> molpad.js
#cat ../../src/js/molpad/MPAtom.js             >> molpad.js
#cat ../../src/js/molpad/MPAtom_calc.js        >> molpad.js
#cat ../../src/js/molpad/MPAtom_handler.js     >> molpad.js
#cat ../../src/js/molpad/MPBond.js             >> molpad.js
#cat ../../src/js/molpad/MPBond_calc.js        >> molpad.js
#cat ../../src/js/molpad/MPBond_handler.js     >> molpad.js
#cat ../../src/js/molpad/MolPad.js             >> molpad.js
#cat ../../src/js/molpad/MPSettings.js         >> molpad.js
#cat ../../src/js/molpad/MPMolecule.js         >> molpad.js
#cat ../../src/js/molpad/MPSelection.js        >> molpad.js
#cat ../../src/js/molpad/MPGraphics.js         >> molpad.js
#cat ../../src/js/molpad/MPEvents.js           >> molpad.js

cat >> molpad.js << EndOfMessage

MPFragments.init();

// export constants
//MolPad.MP_BOND_SINGLE = MP_BOND_SINGLE;
//MolPad.MP_BOND_DOUBLE = MP_BOND_DOUBLE;
//MolPad.MP_BOND_TRIPLE = MP_BOND_TRIPLE;
//MolPad.MP_STEREO_UP = MP_STEREO_UP;
//MolPad.MP_STEREO_DOWN = MP_STEREO_DOWN;
//
//MolPad.fragments = MPFragments;

return MolPad;
});

EndOfMessage
#EOF