'use strict';

const expect = require('chai').expect;
const createLinkedList = require('linkedLists/create');

describe('Linked list', () => {
    it('should create', ()=> {
        let top = createLinkedList(1, 5, 6);

        expect(top.value).to.equal(1);
        expect(top.next.value).to.equal(5);
        expect(top.next.next.value).to.equal(6);
        expect(top.next.next.next).to.be.null
    });
});
