'use strict';

const createLinkedList = require('linkedLists/create');
const setLoopedPoint = require('linkedLists/setLoopedPoint');

describe('Linked list', () => {
    it('should setLoopedPoint', () => {
        let list = [1, 5, 6, 7, 9, 12],
            top = createLinkedList.apply(null, list);

        setLoopedPoint(top, 2);

        let lastCell = top;

        for (let _ of list) {
            lastCell = lastCell.next;
        }

        expect(lastCell.next).toBe(top.next.next.next);
    });
});
