'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return Math.trunc || implementation;
};
