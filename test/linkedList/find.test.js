'use strict';

const expect = require('chai').expect;
const createLinkedList = require('linkedLists/create');
const find = require('linkedLists/find');

describe('Linked list', () => {
    it('should find', ()=> {
        let top = createLinkedList(1, 5, 6, 7, 9, 12);

        expect(find(top, 6).value).to.equal(6);
        expect(find(top, 1000)).to.be.null;
    });
});
