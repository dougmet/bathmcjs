/**
 * @namespace Bathmc
 */

var Bathmc = require('./bathmc.js')();

module.exports = Bathmc;
if (typeof window !== 'undefined') {
	window.Bathmc = Bathmc;
}

//myBath = new Bathmc({item: 1, config: 2});

console.log(Bathmc)
