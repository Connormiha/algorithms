'use strict';

const expect = require('chai').expect;
const sieve = require('sieveOfEratosthenes');

describe('Sieve of Eratosthenes', () => {
    it('simple case', ()=> {
        expect(sieve(10)).to.deep.equal([2, 3, 5, 7]);
        expect(sieve(7)).to.deep.equal([2, 3, 5, 7]);
        expect(sieve(0)).to.deep.equal([]);
        expect(sieve(1)).to.deep.equal([]);
        expect(sieve(2)).to.deep.equal([2]);
    });
});
