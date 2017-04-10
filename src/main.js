
var Bathmc = require('./bathmc.js')();

module.exports = Bathmc;
if (typeof window !== 'undefined') {
	window.Bathmc = Bathmc;
}

console.log(Bathmc);
