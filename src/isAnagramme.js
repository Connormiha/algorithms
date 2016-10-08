'use strict';

const sieve = require('./sieveOfEratosthenes');
const primeNumbers = sieve(1000);

const DICTIONARY = ' abcdefghijklmnopqrstuvwxyz'
    .split('')
    .reduce((akm, letter) => {
        akm[letter] = primeNumbers.shift();
        return akm;
    }, {});

/**
 * Checks words for annagrams. Use log(n) algoritm with primary numbers
 * There is only idea. It makes wrong with big numbers
 * @see https://en.wikipedia.org/wiki/Anagrams
 * @param {String} str1
 * @param {String} str2
 * @return {Boolean}
 */
const isAnagramme = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let sum1 = 1,
        sum2 = 1;

    for (let i = 0; i < str1.length; i++) {
        sum1 *= DICTIONARY[str1[i].toLowerCase()];
        sum2 *= DICTIONARY[str2[i].toLowerCase()];
    }

    return sum1 === sum2;
}

module.exports = isAnagramme;
