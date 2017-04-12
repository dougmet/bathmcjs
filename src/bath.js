'use strict';

module.exports = function() {

  var Box = require('./box.js')();
  var Particle = require('./particle.js')();

  // Occupy the global variable of Bath, and create a simple base class
	var Bath = function(item, config) {
		
    // Need some code here to blend defaults with config
    this.defaults = Bath.defaults;
		this.config = config;

    this.box = new Box(this, config);

    this.doug = function() {console.log(this)};
		return this;
	};

  // Some constant defaults
  var DIM = 3;
  var NSPEC = 1;

	// Globally expose the defaults to allow for user updating/changing
	Bath.defaults = {
		DIM: DIM,
    NSPEC: NSPEC,
    T: 1,
    boxes: {},
    particles: {}
	};

  Bath.defaults.boxes.L = Array(DIM).fill(10);
  Bath.defaults.boxes.wall = Array(DIM).fill(false);

  Bath.defaults.particles = Array(DIM).fill(false);

	Bath.Bath = Bath;

	return Bath;
};
