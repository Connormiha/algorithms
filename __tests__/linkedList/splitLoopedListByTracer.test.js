'use strict';

const createLinkedList = require('linkedLists/create');
const setLoopedPoint = require('linkedLists/setLoopedPoint');
const splitLoopedListByTracer = require('linkedLists/splitLoopedListByTracer');

describe('Linked list', () => {
    it('should work splitLoopedListByTracer with looped list', () => {
        let list = [1, 5, 6, 7, 9, 12],
            top = createLinkedList.apply(null, list);

        setLoopedPoint(top, 2);

        const isLooped = splitLoopedListByTracer(top);

        expect(isLooped).toBe(true);

        let lastCell = top;

        for (let item of list) {
            expect(lastCell.value).toBe(item);
            lastCell = lastCell.next;
        }

        expect(lastCell).toBe(null);
    });

    it('should work splitLoopedListByTracer with not looped list', () => {
        expect(splitLoopedListByTracer(createLinkedList(1, 2, 3))).toBe(false);
        expect(splitLoopedListByTracer(createLinkedList(1))).toBe(false);
    });
});
