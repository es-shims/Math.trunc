'use strict';

require('../auto');

require('../'); // to ensure no side effects

var test = require('tape');
var keys = require('reflect.ownkeys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.trunc.length, 1, 'Math.trunc has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.trunc.name, 'trunc', 'Math.trunc has name "trunc"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'trunc'), 'Math.trunc is not enumerable');
		et.end();
	});

	t.match(keys(Math.trunc).sort().join('|'), /^(arguments\|caller\|)?length|name(\|prototype)?$/, 'has no unexpected own keys');

	runTests(Math.trunc, t);

	t.end();
});
