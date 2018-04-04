'use strict';

module.exports = function() {
    
    var Box = require('./box.js')();
    var Particle = require('./particle.js')();
    var defaults  = require('./defaults.json');
    
    function merge_objects(obj1,obj2)
    {
        if (!obj2) return obj1;

        var result = Object.assign({}, obj1);
        for (var key in obj1) 
        {
            if(obj2.hasOwnProperty(key)) {
                if (!(obj1[key] instanceof Array) && 
                    typeof(obj1[key]) == 'object') {
                    result[key] = merge_objects(obj1[key], obj2[key]);
                }  else {
                    result[key] = obj2[key];
                }
            }
        }
        return result;
    }
    
    // Occupy the global variable of Bath, and create a simple base class
    var Bath = function(config) {
      
        // Start with defaults and overwrite with config
        this.config = merge_objects(defaults, config);
        this.boxes = this.config.boxes.map(x => new Box(x, this));
      
        return this;
    };
    
    // Globally expose the defaults to allow for user updating/changing
    Bath.defaults = defaults;
    
    Bath.Bath = Bath;
    
    return Bath;
};
