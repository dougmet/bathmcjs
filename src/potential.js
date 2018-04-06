'use strict';

module.exports = function() {
  
	var Utils = require('./utils.js');

	var Potential = function(config, bath) {
        

		return this;
	};

    Potential.prototype = {
        printpos: function() {console.log(this.r)}
    }

	return Potential;
}
