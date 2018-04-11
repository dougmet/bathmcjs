'use strict';

module.exports = function() {
    
    const Utils = require('../utils.js');
    const defaults  = require('../defaults.json');

	const LJ = function(config, potential) {

        this.potential = potential;
        this.config = Utils.dc(config);

        this.rcut = Utils.dc(config.rcut);
        this.rcut2 = Math.pow(this.rcut, 2);

        this.sigma = this.rcut;
        this.sigma2 = this.rcut2;

        this.eps = Utils.dc(config.eps);
        this.eps4 = Math.pow(this.eps, 4);
        
        this.printme();

		return this;
    };

    LJ.prototype = {
        printme: function() {console.log("LJ Potential"); console.log(this)},
        pair_pot: function(r2, dr, p1, p2) {
            let sigr6 = Math.pow(this.sigma2/r2, 3);
            return (this.eps4*sigr6*(sigr6 - 1.0));
        }
    }

	return LJ;
}
