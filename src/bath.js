'use strict';

module.exports = function() {

	// Occupy the global variable of Bath, and create a simple base class
	var Bath = function(item, config) {
		//this.construct(config);
		this.config = config;

		this.doug = function() {console.log(config)};
		return this;
	};

	// Globally expose the defaults to allow for user updating/changing
	Bath.defaults = {
		global: {
			a: 1
			}
	};

	Bath.Bath = Bath;

	return Bath;
};
