'use strict';

const {Poison, findPoison} = require('findPoisonBitMask');

describe('findPoisonBitMask', () => {
    it('should find', ()=> {
        for (let i = 0; i < 100; i++) {
            const poison = new Poison(),
                expectedPoison = findPoison(poison);

            expect(poison.checkPoison(expectedPoison)).toBe(true);
            expect(poison.checkPoison(expectedPoison + 1)).toBe(false);
        }
    });
});
