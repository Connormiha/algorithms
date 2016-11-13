const createList = require('./create');

/**
 * Gets linked list and set loop linking
 * @param {Cell} firstCell the first cell of linked list
 * @param {Number} loopPoint point for loop
 */
const setLoopedPoint = (firstCell, loopPoint) => {
    let pointCell = null,
        currentCell = firstCell;

    for (let i = 0; ; i++) {
        if (i === loopPoint) {
            pointCell = currentCell;
        }

        if (currentCell.next === null) {
            currentCell.next = pointCell;
            break;
        }

        currentCell = currentCell.next;
    }
}

module.exports = setLoopedPoint;
