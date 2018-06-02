'use strict';

const isAnagramme = require('isAnagramme');

describe('Anagram', () => {
    it('simple case', ()=> {
        expect(isAnagramme('aab', 'aba')).toBe(true);
        expect(isAnagramme('aaaaa', 'aaaaa')).toBe(true);
        expect(isAnagramme('zzzzzzzz', 'zzzzzzzz')).toBe(true);
        expect(isAnagramme('zzzzzzzz X', 'zzzzzzzzX ')).toBe(true);

        expect(isAnagramme('aa', 'aba')).toBe(false);
        expect(isAnagramme('aab', 'aca')).toBe(false);
        expect(isAnagramme('aaaa', 'aaa')).toBe(false);
        expect(isAnagramme('zzzzzzzz', 'zzzzzzzy')).toBe(false);
    });
});
