'use strict';

const createLinkedList = require('linkedLists/create');
const setLoopedPoint = require('linkedLists/setLoopedPoint');
const checkLoopedListByRevers = require('linkedLists/checkLoopedListByRevers');

describe('Linked list checkLoopedListByRevers', () => {
    it('should correct find loop', () => {
        let list = [1, 5, 6, 7, 9, 12],
            top = createLinkedList.apply(null, list);

        setLoopedPoint(top, 2);

        const isLooped = checkLoopedListByRevers(top);

        expect(isLooped).toBe(true);
    });

    it('shouldn\'t find loop', () => {
        expect(checkLoopedListByRevers(createLinkedList(1, 2, 3))).toBe(false);
        expect(checkLoopedListByRevers(createLinkedList(1))).toBe(false);
    });
});
