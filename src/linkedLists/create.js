'use strict';

class Cell {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const createList = (...args) => {
    let top = new Cell(args[0]),
        prev = top;

    for (let i = 1; i < args.length; i++) {
        prev.next = new Cell(args[i]);
        prev = prev.next;
    }

    return top;
}

module.exports = createList;
