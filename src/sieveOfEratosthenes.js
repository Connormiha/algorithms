'use strict';

/**
 * Returns list of prime number fron 2..n
 * @see https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param {Number} n
 * @return {Number[]}
 */
const sieve = (n) => {
    const list = Array(n + 1);

    let p = 2,
        i;

    do {
        for (i = p * 2; i <= n; i+= p) {
            list[i] = true;
        }

        for (i = p + 1; i <= n; i++) {
            if (!list[i]) {
                break;
            }
        }

        p = i;
    } while (p * 2 <= n);

    let result = [];

    for (i = 2; i <= n; i++) {
        if (!list[i]) {
            result.push(i);
        }
    }

    return result;
}

module.exports = sieve;
