'use strict';

module.exports = function() {

  var Box = require('./box.js')();

  // Occupy the global variable of Bath, and create a simple base class
	var Bath = function(item, config) {
		
    var self = this;

		self.config = config;

    self.box = new Box(this, config);

    self.defaults = Bath.defaults;

		self.doug = function() {console.log(self)};
		return self;
	};

	// Globally expose the defaults to allow for user updating/changing
	Bath.defaults = {
		a: 1
	};

	Bath.Bath = Bath;

	return Bath;
};
