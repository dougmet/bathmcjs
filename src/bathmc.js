'use strict';

module.exports = function() {

	// Occupy the global variable of Bathmc, and create a simple base class
	var Bathmc = function(item, config) {
		this.construct(item, config);
		return this;
	};

	// Globally expose the defaults to allow for user updating/changing
	Bathmc.defaults = {
		global: {
			a: 1
			}
	};

	Bathmc.Bathmc = Bathmc;

	return Bathmc;
};
