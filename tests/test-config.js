/**
 * @namespace Bath
 */

const Bath = require('../src/Bath.js')();

module.exports = Bath;
if (typeof window !== 'undefined') {
	window.Bath = Bath;
}

config = require('./test-config.json');

myBath = new Bath(config);

//console.log(myBath.potential);
