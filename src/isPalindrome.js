'use strict';

/**
 * Checks words for palindrome. Use n/2 algoritm
 * @see https://en.wikipedia.org/wiki/Palindrome
 * @param {String} str
 * @return {Boolean}
 */
const isPalindrome = (str) => {
    for (let i = 0, j = str.length - 1; i < j; i++, j++) {
        while (str[i] === ' ') {
            i++;
        }

        while (str[j] === ' ') {
            j--;
        }

        if (i < j) {
            break;
        }

        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;
