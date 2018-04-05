'use strict';

module.exports = function() {
    
    var Utils = require('./utils.js');
    var defaults  = require('./defaults_box.json');

	var Box = function(config, bath) {

        this.bath = bath;
        this.config = Utils.merge_objects(defaults, config);
        
        this.check_config(this, bath);

        this.printconfig();

		return this;
    };

    Box.prototype = {
        check_config: function() {
            Utils.assert(this.config.L.length == this.bath.DIM,
                "bath.DIM must match box dimensions");
        },
        printconfig: function() {console.log(this.config)}
    }

	return Box;
}
