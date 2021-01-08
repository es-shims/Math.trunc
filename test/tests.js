'use strict';

module.exports = function (trunc, t) {
	t.test('should be correct', function (st) {
		st.equal(trunc(NaN), NaN, 'trunc(NaN)');
		st.equal(trunc(-0), -0, 'trunc(-0)');
		st.equal(trunc(+0), +0, 'trunc(+0)');
		st.equal(trunc(Infinity), Infinity, 'trunc(Infinity)');
		st.equal(trunc(-Infinity), -Infinity, 'trunc(-Infinity)');
		st.equal(trunc(1.01), 1, 'trunc(1.01)');
		st.equal(trunc(1.99), 1, 'trunc(1.99)');
		st.equal(trunc(-555.555), -555, 'trunc(-555.555)');
		st.equal(trunc(-1.99), -1, 'trunc(-1.99)');
		st.end();
	});

	t.test('should coerce to a number immediately', function (st) {
		var valueOfIsNaN = { valueOf: function () { return NaN; } };
		var valueOfIsInfinity = { valueOf: function () { return Infinity; } };

		st.equal(trunc(valueOfIsInfinity), Infinity, 'trunc(valueOfIsInfinity)');
		st.equal(trunc(valueOfIsNaN), NaN, 'trunc(valueOfIsNaN)');
		st.end();
	});
};
