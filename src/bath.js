'use strict';

module.exports = function() {
    
    const Box = require('./box.js')();
    const Species = require('./species.js')();
    const Potential = require('./potential.js')();
    const Utils = require('./utils.js');
    const defaults  = require('./defaults.json');
    
    // Occupy the global variable of Bath, and create a simple base class
    const Bath = function(full_config) {
      
        // Start with defaults and overwrite with config
        this.config = Utils.merge_objects(defaults.bath, full_config.bath);
        this.DIM = Utils.dc(this.config.DIM);
        this.T = Utils.dc(this.config.T);
        this.box = full_config.box.map(x => new Box(x, this));
        this.species = full_config.particle.map((x, index) => new Species(x, index, this));
        this.particle = this.species.map(spec => spec.create_particles());
        this.potential = new Potential(full_config.potential, this);
      
        return this;
    };
    
    // Globally expose the defaults to allow for user updating/changing
    Bath.defaults = defaults;
    
    return Bath;
};
