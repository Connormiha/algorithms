const swap = require('./swap');

/**
 * Convert array to array (heap)
 * @param {Number[]} arr
 * @return {Number[]}
 */
const arrayToHeap = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let index = i;

        while (index !== 0) {
            // find parent index
            let parent = Math.floor((index-1) / 2);

            if (arr[index] <= arr[parent]) {
                break;
            }

            // swap parent and children
            swap(arr, index, parent);

            index = parent;
        }
    }

    return arr;
}

module.exports = arrayToHeap;
