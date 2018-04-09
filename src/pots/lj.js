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
        
        this.printme();

		return this;
    };

    LJ.prototype = {
        printme: function() {console.log("LJ Potential"); console.log(this)}
    }

	return LJ;
}
