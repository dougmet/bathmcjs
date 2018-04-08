'use strict';

module.exports = function() {
    
    var Utils = require('./utils.js');
    var defaults  = require('./defaults.json');

	var HS = function(config, potential) {

        this.potential = potential;
        this.config = Utils.dc(config);

        this.rcut = Utils.dc(config.rcut);
        this.rcut2 = pow(this.rcut, 2);

        this.sigma = this.rcut;
        this.sigma2 = this.rcut2;
        
        this.printme();

		return this;
    };

    HS.prototype = {
        printme: function() {console.log("HS Potential"); console.log(this)}
    }

	return HS;
}
