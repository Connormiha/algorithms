const find = (top, value) => {
    while (top !== null) {
        if (top.value === value) {
            return top;
        }

        top = top.next;
    }

    return null;
}

module.exports = find;
