/**
 * Finds loop in linkedList, split loop and returns result true if was looped
 * @param {Cell} firstCell
 * @return {Boolean} isWasLooped
 */
const splitLoopedListByTracer = (firstCell) => {
    let currentCell = firstCell;

    while (currentCell.next !== null) {
        let tracer = firstCell;

        while (tracer !== currentCell) {
            if (tracer.next === currentCell.next) {
                currentCell.next = null;
                return true;
            }

            tracer = tracer.next;
        }

        currentCell = currentCell.next;
    }

    return false;
}

module.exports = splitLoopedListByTracer;
