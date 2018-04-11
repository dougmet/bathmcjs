'use strict';

module.exports = function() {
    
    const Utils = require('./utils.js');

	let CellGroup = function(config, box) {

        
        this.printme();

		return this;
    };

    CellGroup.prototype = {
        check_config: function() {
            Utils.assert(this.config.L.length == this.bath.DIM,
                "bath.DIM must match box dimensions");
        },
        printme: function() {console.log(this)}
    }

	return CellGroup;
}
