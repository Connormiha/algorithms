'use strict';

const smallestInteger = require('greatestCommonDivisor');

describe('The greatest common divisor', () => {
    it('simple case', ()=> {
        expect(smallestInteger(8, 4)).toBe(4);
        expect(smallestInteger(8, 6)).toBe(2);
        expect(smallestInteger(10, 5)).toBe(5);
        expect(smallestInteger(5, 55)).toBe(5);

        expect(smallestInteger(5, 4)).toBe(1);
        expect(smallestInteger(5, 0)).toBe(5);
    });
});
