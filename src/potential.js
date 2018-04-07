'use strict';

module.exports = function() {
  
    var Utils = require('./utils.js');
    var Vec = require('./vector_operations.js');

	var Potential = function(config, bath) {
        
        this.bath = bath;
        this.DIM = bath.DIM;
        this.overlap = false;

        HERE HERE HERE 

		return this;
	};

    Potential.prototype = {
        calc_potential: function(p1, p2) {
            // Select the box we're in
            var box = p1.box;
            var dr = Array(this.DIM);	// the vector from p1 to p2
            s1 = p1.species;
            s2 = p2.species;
            
            double r2 = box.PBCsubtract(dr, p2.r, p1.r); // vec from p1->p2
            this.overlap=false;
            
            if (r2 < this.pot[s1][s2]->cutoff2) {
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
