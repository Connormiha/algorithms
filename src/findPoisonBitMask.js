'use strict';

const RABBITS_COUNT = 10;
const BOTTLES_COUNT = 1000;
const zeros = Array(RABBITS_COUNT + 1).join('0');

class Poison {
    constructor(poisonBottle) {
        this._poisonBottle = poisonBottle || Math.round(Math.random() * BOTTLES_COUNT) + 1;
    }

    /**
     * Checks bottle for poison
     * @param {Number} number
     * @return {Boolean}
     */
    checkPoison(number) {
        return number === this._poisonBottle;
    }

    /**
     * Gets full-fed rabbits and kills intoxicated
     * @param {Array<Number[]>} rabbits. List of rabbits with list of drunk bottles
     * @example useRabbits([[2, 3, 70], [900, 5, 80]]); // [0, 1]
     * @return {Number[]} array of rabbits. 1 - dead, 0 - alive
     */
    useRabbits(rabbits) {
        return rabbits.map((item, idx) => {
            return item.includes(this._poisonBottle) ? 1 : 0;
        });
    }
}

/**
 * Finds bottle with poison
 * @param {Poison} poison
 * @return {Number}
 */
const findPoison = (poison) => {
    const rabbits = [];

    for (let i = 0; i < RABBITS_COUNT; i++) {
        rabbits[i] = [];
    }

    for (let i = 1; i <= BOTTLES_COUNT; i++) {
        let binaryNumber = i.toString(2);

        binaryNumber = zeros.slice(0, -binaryNumber.length) + binaryNumber;

        for (let j = 0; j < binaryNumber.length; j++) {
            if (binaryNumber[j] === '1') {
                rabbits[j].push(i);
            }
        }
    }

    const usedRabbits = poison.useRabbits(rabbits);

    return parseInt(usedRabbits.join(''), 2);
}

module.exports = {
    Poison,
    findPoison
};
