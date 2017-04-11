'use strict';

module.exports = function() {
  
	var Box = function(bath, config) {
		
        var self = this;

        self.bath = bath;
		self.config = config;
        self.config.ashton = 2;

		return self;
	};

    Box.prototype = {
        shout: function() {console.log("ARRGH!")},
        printconfig: function() {console.log(this.config)}
    }

	return Box;
}
