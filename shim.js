'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimMathTrunc() {
	var polyfill = getPolyfill();
	define(Math, { trunc: polyfill });
	return polyfill;
};
