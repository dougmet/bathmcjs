'use strict';

module.exports = function() {
    
    const Utils = require('../utils.js');
    const defaults  = require('../defaults.json');

	const HS = function(config, potential) {

        this.potential = potential;
        this.config = Utils.dc(config);

        this.rcut = Utils.dc(config.rcut);
        this.rcut2 = Math.pow(this.rcut, 2);

        this.sigma = this.rcut;
        this.sigma2 = this.rcut2;

		return this;
    };

    HS.prototype = {
        printme: function() {console.log("HS Potential"); console.log(this)},
        pair_pot: function(r2, dr, p1, p2) {
            // If you got here then it's immediately overlap
            this.potential.overlap = false;
            return Infinity;
        }
    }

	return HS;
}
