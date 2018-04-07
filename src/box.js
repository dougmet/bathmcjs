'use strict';

module.exports = function() {
    
    var Utils = require('./utils.js');
    var defaults  = require('./defaults.json');

	var Box = function(config, bath) {

        this.bath = bath;
        this.config = Utils.merge_objects(defaults.box, config);
        
        this.check_config(this, bath);

        this.L = Utils.dc(this.config.L);
        this.wall = Utils.dc(this.config.wall);

        this.printme();

		return this;
    };

    Box.prototype = {
        check_config: function() {
            Utils.assert(this.config.L.length == this.bath.DIM,
                "bath.DIM must match box dimensions");
        },

        PBCpos: function(posvec) {
            // For position vectors this applies the periodic boundary conditions
            for(var k=0;k<posvec.length;k++) {
                if (!this.wall[k]) { // a wall kills PBCs
                    if (posvec[k] >= this.L[k])
                        posvec[k] -= this.L[k];
                    else if (posvec[k] < 0)
                        posvec[k] += this.L[k];
                }
            }
            // Unchanged by floppy box
        },
        
        PBCsubtract(vec, plus, minus) {
            // Same as above but return the magnitude squared
            var r2=0;
            for (var k=0;k<vec.length;k++) {
                vec[k] = plus[k] - minus[k];
                if (!wall[k]) { // a wall kills PBCs
                    if (vec[k] > L[k]/2)
                        vec[k] -= L[k];
                    else if (vec[k] < -L[k]/2)
                        vec[k] += L[k];
                }
            }
            
            for (k=0;k<vec.length;k++)
                r2 += vec[k]*vec[k];
            
            return r2;
        },

        printconfig: function() {console.log(this.config)},
        printme: function() {console.log({'L': this.L, 'wall': this.wall})}
    }

	return Box;
}
