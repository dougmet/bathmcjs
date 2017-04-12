'use strict';

module.exports = function() {
  
	var Particle = function(bath, config) {
		
        this.species = 0;
		this.r = [0,0,0];
        this.n = [[1,0,0], [0,1,0], [0,0,1]];
        this.cell = null;
		this.box = null;
		this.pos_part = -1;               // position in the bath particle list
        
		this.up = null;        // The cell linked lists
		this.down = null;

		return this;
	};

    Particle.prototype = {
        printpos: function() {console.log(this.r)}
    }

	return Particle;
}
