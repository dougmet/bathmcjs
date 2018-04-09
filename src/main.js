/**
 * @namespace Bath
 */

const Bath = require('./Bath.js')();

module.exports = Bath;
if (typeof window !== 'undefined') {
	window.Bath = Bath;
}

config = require('./defaults.json');

myBath = new Bath(config);

