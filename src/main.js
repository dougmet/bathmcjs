/**
 * @namespace Bath
 */

var Bath = require('./Bath.js')();

module.exports = Bath;
if (typeof window !== 'undefined') {
	window.Bath = Bath;
}

myBath = new Bath();

console.log(myBath.config)
