'use strict';

module.exports = function() {
    
    var Box = require('./box.js')();
    var Particle = require('./particle.js')();
    var Utils = require('./utils.js');
    var defaults  = require('./defaults.json');
    
    // Occupy the global variable of Bath, and create a simple base class
    var Bath = function(config) {
      
        // Start with defaults and overwrite with config
        this.config = Utils.merge_objects(defaults, config);
        this.DIM = this.config.DIM;
        this.T = this.config.T;
        this.boxes = this.config.boxes.map(x => new Box(x, this));
      
        return this;
    };
    
    // Globally expose the defaults to allow for user updating/changing
    Bath.defaults = defaults;
    
    return Bath;
};
