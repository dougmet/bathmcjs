'use strict';

module.exports = function() {
  
	var Box = function(bath, config) {

        this.bath = bath;
		this.config = config;
        this.config.ashton = 2;

		return this;
	};

    Box.prototype = {
        shout: function() {console.log("ARRGH!")},
        printconfig: function() {console.log(this.config)}
    }

	return Box;
}
