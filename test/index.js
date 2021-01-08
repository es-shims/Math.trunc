'use strict';

var trunc = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(trunc, t);

	t.end();
});
