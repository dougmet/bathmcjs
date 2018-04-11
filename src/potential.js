'use strict';

const pots = {
    'HS': require('./pots/hs.js')(),
    'LJ': require('./pots/lj.js')()
}

module.exports = function() {
  
    const Utils = require('./utils.js');
    const Vec = require('./vector_operations.js');

	const Potential = function(config, bath) {
        
        this.bath = bath;
        this.DIM = bath.DIM;
        this.overlap = false;
        
        // Read each potential into a flat, 1D array.
        const flat_pots = config.map(conf => this.make_potential(conf));

        // Create a 2D array to hold the potentials
        const Nspec = bath.species.length;
        this.pot = Array(Nspec).fill(new Array(Nspec));

        // Now assign each potential to a location in the 2D array
        flat_pots.forEach(one_pot => {
            let s1 = one_pot.config.species_1;
            let s2 = one_pot.config.species_2;
            this.pot[s1][s2] = this.pot[s2][s1] = one_pot;
        });

        // Probably should check they're all defined.
        console.log(this);
        
		return this;
	};

    Potential.prototype = {
        make_potential: function(conf) {
            return new pots[conf.type](conf, this);
        },

        calc_potential: function(p1, p2) {
            // Select the box we're in
            let box = p1.box;
            let dr = Array(this.DIM);	// the vector from p1 to p2
            s1 = p1.species;
            s2 = p2.species;
            
            let r2 = box.PBCsubtract(dr, p2.r, p1.r); // vec from p1->p2
            this.overlap=false;
            
            if (r2 < this.pot[s1][s2].rcut2) {
                // all potential's must have rcut2 and pair_pot
                return(this.pot[s1][s2].pair_pot(r2, dr, p1, p2));
            }
            else {
                // Outside the cutoff, no interaction
                return(0);
            }
        }
    }

	return Potential;
}
