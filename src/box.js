'use strict';

module.exports = function() {
  
	var Box = function(config, bath) {

        this.bath = bath;
		this.config = config;

		return this;
	};

    Box.prototype = {
        shout: function() {console.log("ARRGH!")},
        printconfig: function() {console.log(this.config)}
    }

	return Box;
}
