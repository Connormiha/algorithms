/**
 * Reverse linkedList
 * @param {Cell} sentinel
 * @return {Cell} last found cell
 */
const reversLinkedList = (sentinel) => {
    let prevCell = null,
        currentCell = sentinel;

    while (currentCell !== null) {
        let nextCell = currentCell.next;

        currentCell.next = prevCell;

        prevCell = currentCell;
        currentCell = nextCell;
    }

    return prevCell;
};

/**
 * Check loop in linkedList by double reverse
 * @param {Cell} firstCell
 * @return {Boolean} hasLoop
 */
const checkLoopedListByRevers = (firstCell) => {
    if (firstCell.next === null) {
        return false;
    }

    let sentinel = reversLinkedList(firstCell),
        sentinel2 = reversLinkedList(sentinel);

    return sentinel === sentinel2;
}

module.exports = checkLoopedListByRevers;
