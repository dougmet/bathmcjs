'use strict';

module.exports = function() {
  
    const Utils = require('./utils.js');
    const Vec = require('./vector_operations.js');

	const Potential = function(config, bath) {
        
        this.bath = bath;
        this.DIM = bath.DIM;
        this.overlap = false;
        
        // Create a 2D array to hold the potentials
        const all_spec = Utils.range(bath.species.length);
        this.pot = all_spec.map(function() {return all_spec});
        

		return this;
	};

    Potential.prototype = {
        calc_potential: function(p1, p2) {
            // Select the box we're in
            let box = p1.box;
            let dr = Array(this.DIM);	// the vector from p1 to p2
            s1 = p1.species;
            s2 = p2.species;
            
            let r2 = box.PBCsubtract(dr, p2.r, p1.r); // vec from p1->p2
            this.overlap=false;
            
            if (r2 < this.pot[s1][s2].rcut2) {
                // The general potential call (send in overlap as a reference)
                // JS TODO - may need to just pass in this instead
                return(this.pot[s1][s2].pair_pot(this.overlap, r2, dr, p1, p2));
            }
            else {
                // Outside the cutoff, no interaction
                return(0);
            }
        }

    }

	return Potential;
}
