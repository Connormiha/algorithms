'use strict';

const sieve = require('sieveOfEratosthenes');

describe('Sieve of Eratosthenes', () => {
    it('simple case', ()=> {
        expect(sieve(10)).toEqual([2, 3, 5, 7]);
        expect(sieve(7)).toEqual([2, 3, 5, 7]);
        expect(sieve(0)).toEqual([]);
        expect(sieve(1)).toEqual([]);
        expect(sieve(2)).toEqual([2]);
    });
});
