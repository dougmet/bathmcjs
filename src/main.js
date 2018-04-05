/**
 * @namespace Bath
 */

var Bath = require('./Bath.js')();

module.exports = Bath;
if (typeof window !== 'undefined') {
	window.Bath = Bath;
}

myBath = new Bath({'boxes': [{'L': [3,4,5]}]});

console.log(myBath)
