'use strict';

/**
 * Returns the greatest common divisor
 * @see https://en.wikipedia.org/wiki/Greatest_common_divisor
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
const greatestCommonDivisor = (a, b) => {
    while (b !== 0) {
        let remainder = a % b;

        a = b;
        b = remainder;
    }

    return a;
}

module.exports = greatestCommonDivisor;
