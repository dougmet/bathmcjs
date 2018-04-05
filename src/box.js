'use strict';

module.exports = function() {
    
    var Utils = require('./utils.js');
    var defaults  = require('./defaults_box.json');

	var Box = function(config, bath) {

        this.bath = bath;
        this.config = Utils.merge_objects(defaults, config);
        
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
        printconfig: function() {console.log(this.config)},
        printme: function() {console.log({'L': this.L, 'wall': this.wall})}
    }

	return Box;
}
