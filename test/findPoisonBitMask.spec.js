'use strict';

const {expect} = require('chai');
const {Poison, findPoison} = require('findPoisonBitMask');

describe('findPoisonBitMask', () => {
    it('should find', ()=> {
        for (let i = 0; i < 100; i++) {
            const poison = new Poison(),
                expectedPoison = findPoison(poison);

            expect(poison.checkPoison(expectedPoison)).to.be.true;
            expect(poison.checkPoison(expectedPoison + 1)).to.be.false;
        }
    });
});
