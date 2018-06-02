'use strict';

const isPalindrome = require('isPalindrome');

describe('Anagram', () => {
    it('simple case', ()=> {
        expect(isPalindrome('abcba')).toBe(true);
        expect(isPalindrome('a bc     ba')).toBe(true);
    });
});
