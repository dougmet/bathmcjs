'use strict';

module.exports = function() {
  
	var Utils = require('./utils.js');

	var Particle = function(pos_part, config, bath) {
		
		this.species = Utils.dc(config.species);
		
		var zero_vec = Array(bath.DIM).fill(0.0);

		this.r = zero_vec.slice();

		// Create the particle axes with unit vectors along box axes
		this.n = Utils.range(config.Naxes).map(x => zero_vec.slice());
		for (var i =0; i<this.n.length; i++) {
			this.n[i][i % bath.DIM] = 1;
		}
		
        this.cell = null;
		this.box = null;
		this.pos_part = pos_part;    // position in the bath particle list
        
		this.up = null;              // The cell linked lists
		this.down = null;

		return this;
	};

    Particle.prototype = {
        printpos: function() {console.log(this.r)}
    }

	return Particle;
}
