'use strict';

module.exports = function() {
  
	var Box = function(bath, config) {
		
        var self = this;

        self.bath = bath;
		self.config = config;

        self.shout = function() {console.log("ARRGH!")};

		return self;
	};

	return Box;
}
