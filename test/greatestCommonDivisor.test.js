'use strict';

const expect = require('chai').expect;
const smallestInteger = require('../src/greatestCommonDivisor');

describe('The greatest common divisor', () => {
    it('simple case', ()=> {
        expect(smallestInteger(8, 4)).to.equal(4);
        expect(smallestInteger(8, 6)).to.equal(2);
        expect(smallestInteger(10, 5)).to.equal(5);
        expect(smallestInteger(5, 55)).to.equal(5);

        expect(smallestInteger(5, 4)).to.equal(1);
        expect(smallestInteger(5, 0)).to.equal(5);
    });
});
