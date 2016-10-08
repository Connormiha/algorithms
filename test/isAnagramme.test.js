'use strict';

const expect = require('chai').expect;
const isAnagramme = require('isAnagramme');

describe('Anagram', () => {
    it('simple case', ()=> {
        expect(isAnagramme('aab', 'aba')).to.be.true;
        expect(isAnagramme('aaaaa', 'aaaaa')).to.be.true;
        expect(isAnagramme('zzzzzzzz', 'zzzzzzzz')).to.be.true;
        expect(isAnagramme('zzzzzzzz X', 'zzzzzzzzX ')).to.be.true;

        expect(isAnagramme('aa', 'aba')).to.be.false;
        expect(isAnagramme('aab', 'aca')).to.be.false;
        expect(isAnagramme('aaaa', 'aaa')).to.be.false;
        expect(isAnagramme('zzzzzzzz', 'zzzzzzzy')).to.be.false;
    });
});
