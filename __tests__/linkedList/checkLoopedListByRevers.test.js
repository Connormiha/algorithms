import createLinkedList from 'linkedLists/create';
import setLoopedPoint from 'linkedLists/setLoopedPoint';
import checkLoopedListByRevers from 'linkedLists/checkLoopedListByRevers';

describe('Linked list checkLoopedListByRevers', () => {
    it('should correct find loop', () => {
        const list = [1, 5, 6, 7, 9, 12];
        const top = createLinkedList(...list);

        setLoopedPoint(top, 2);

        const isLooped = checkLoopedListByRevers(top);

        expect(isLooped).toBe(true);
    });

    it('shouldn\'t find loop', () => {
        expect(checkLoopedListByRevers(createLinkedList(1, 2, 3))).toBe(false);
        expect(checkLoopedListByRevers(createLinkedList(1))).toBe(false);
    });
});
