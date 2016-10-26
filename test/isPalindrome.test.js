'use strict';

const expect = require('chai').expect;
const isPalindrome = require('isPalindrome');

describe('Anagram', () => {
    it('simple case', ()=> {
        expect(isPalindrome('abcba')).to.be.true;
        expect(isPalindrome('a bc     ba')).to.be.true;
    });
});
