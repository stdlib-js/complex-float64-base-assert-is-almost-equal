/** @license Apache-2.0 */

'use strict';

/**
* Test whether two double-precision complex floating-point numbers are approximately equal within a specified number of ULPs (units in the last place).
*
* @module @stdlib/complex-float64-base-assert-is-almost-equal
*
* @example
* var EPS = require( '@stdlib/constants-float64-eps' );
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var isAlmostEqual = require( '@stdlib/complex-float64-base-assert-is-almost-equal' );
*
* var z1 = new Complex128( 1.0, 3.0 );
* var z2 = new Complex128( 1.0+EPS, 3.0 );
*
* var bool = isAlmostEqual( z1, z2, 0 );
* // returns false
*
* bool = isAlmostEqual( z1, z2, 1 );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
