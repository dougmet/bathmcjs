'use strict';

module.exports = function() {
    
    var Utils = require('./utils.js');

	var Species = function(config, bath) {

        this.bath = bath;
        this.config = Utils.merge_objects(defaults, config);
        
        this.check_config(this, bath);

        this.cellgroup = 0; // or a pointer?

        this.printconfig();

		return this;
    };

    Species.prototype = {
        check_config: function() {
            Utils.assert(this.config.L.length == this.bath.DIM,
                "bath.DIM must match box dimensions");
        },
        printconfig: function() {console.log(this.config)}
    }

	return Species;
}
