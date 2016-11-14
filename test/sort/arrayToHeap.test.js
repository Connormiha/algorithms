'use strict';

const {expect} = require('chai');
const arrayToHeap = require('sort/arrayToHeap');

describe('Array to heap', () => {
    it('should create', ()=> {
        expect(arrayToHeap([14, 5, 3, 8, 10, 76])).to.deep.equal([76, 10, 14, 5, 8, 3]);
        expect(arrayToHeap([])).to.deep.equal([]);
    });
});
