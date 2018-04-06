'use strict';

module.exports = function() {
    
    var Box = require('./box.js')();
    var Particle = require('./particle.js')();
    var Species = require('./species.js')();
    var Utils = require('./utils.js');
    var defaults  = require('./defaults.json');
    
    // Occupy the global variable of Bath, and create a simple base class
    var Bath = function(full_config) {
      
        // Start with defaults and overwrite with config
        this.config = Utils.merge_objects(defaults.bath, full_config.bath);
        this.DIM = Utils.dc(this.config.DIM);
        this.T = Utils.dc(this.config.T);
        this.box = full_config.box.map(x => new Box(x, this));
        this.species = full_config.particle.map(x => new Species(x, this));
        //this.particle = this.config.particles.map(x => new Particle(x, this));
      
        return this;
    };
    
    // Globally expose the defaults to allow for user updating/changing
    Bath.defaults = defaults;
    
    return Bath;
};
