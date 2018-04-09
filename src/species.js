'use strict';

module.exports = function() {
    
    const Utils = require('./utils.js');
    const Particle = require('./particle.js')();
    const defaults  = require('./defaults.json');

	const Species = function(config, index, bath) {

        this.bath = bath;
        this.config = Utils.merge_objects(defaults.particle, config);
        this.config.species = index;
        this.index = index;
        
        this.check_config(this, bath);

        this.name = Utils.dc(this.config.name);
        this.cell_group = Utils.dc(this.config.cell_group);
        this.N = Utils.dc(this.config.N);
        this.Naxes = Utils.dc(this.config.Naxes);

        this.printme();

		return this;
    };

    Species.prototype = {
        check_config: function() {
            // Utils.assert(something == something_else);
        },
        printme: function() {console.log({
            "name": this.name,
            "index": this.index,
            "N": this.N,
            "Naxes": this.Naxes,
            "cell_group": this.cell_group})
        },
        create_particles: function() {
            let particles = Utils.range(this.N).
                map(x => new Particle(x, this.config, this.bath))
            return particles;
        }
    }

	return Species;
}
