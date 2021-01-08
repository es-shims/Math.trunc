'use strict';

var $Number = Number;
var floor = Math.floor;

module.exports = function trunc(value) {
	var x = $Number(value);
	return x < 0 ? -floor(-x) : floor(x);
};
