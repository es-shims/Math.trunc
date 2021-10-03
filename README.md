# Math.trunc <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.trunc` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.trunc
```

## Usage/Examples

```js
console.log(Math.trunc(42.84); // 42
console.log(Math.trunc(0.123); // 0
console.log(Math.trunc(-0.123); // -0
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.trunc
[npm-version-svg]: https://versionbadg.es/es-shims/Math.trunc.svg
[deps-svg]: https://david-dm.org/es-shims/Math.trunc.svg
[deps-url]: https://david-dm.org/es-shims/Math.trunc
[dev-deps-svg]: https://david-dm.org/es-shims/Math.trunc/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.trunc#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.trunc.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.trunc.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.trunc.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.trunc
[codecov-image]: https://codecov.io/gh/es-shims/Math.trunc/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Math.trunc/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Math.trunc
[actions-url]: https://github.com/es-shims/Math.trunc/actions
