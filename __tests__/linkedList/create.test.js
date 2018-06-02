'use strict';

const createLinkedList = require('linkedLists/create');

describe('Linked list', () => {
    it('should create', ()=> {
        let top = createLinkedList(1, 5, 6);

        expect(top.value).toBe(1);
        expect(top.next.value).toBe(5);
        expect(top.next.next.value).toBe(6);
        expect(top.next.next.next).toBe(null);
    });
});
