'use strict';

module.exports = function() {
    
    var Utils = require('./utils.js');
    var defaults  = require('./defaults.json');

	var Species = function(config, bath) {

        this.bath = bath;
        this.config = Utils.merge_objects(defaults.particle, config);
        
        this.check_config(this, bath);

        this.name = Utils.dc(this.config.name);
        this.cell_group = Utils.dc(this.config.cell_group);
        this.N = Utils.dc(this.config.N);

        this.printme();

		return this;
    };

    Species.prototype = {
        check_config: function() {
            // Utils.assert(something == something_else);
        },
        printme: function() {console.log({
            "name": this.name,
            "N": this.N,
            "cell_group": this.cell_group})
        }
    }

	return Species;
}
