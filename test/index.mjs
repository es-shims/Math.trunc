import trunc, * as truncModule from 'math.trunc';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(trunc, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(truncModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = truncModule;
	t.equal(await import('math.trunc/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.trunc/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.trunc/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
