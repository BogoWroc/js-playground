import * as chai from 'chai';
import isEven from "./Recursion";

describe('Odd or Even number by recursion', function () {
    it('should return true if number is even', function () {
        chai.expect(isEven(-4)).to.be.true;
        chai.expect(isEven(-2)).to.be.true;
        chai.expect(isEven(0)).to.be.true;
        chai.expect(isEven(2)).to.be.true;
        chai.expect(isEven(4)).to.be.true;
        chai.expect(isEven(6)).to.be.true;
        chai.expect(isEven(8)).to.be.true;
        chai.expect(isEven(10)).to.be.true;
        chai.expect(isEven(50)).to.be.true;
    });

    it('should return false if number is odd', function () {
        chai.expect(isEven(-3)).to.be.false;
        chai.expect(isEven(-1)).to.be.false;
        chai.expect(isEven(1)).to.be.false;
        chai.expect(isEven(3)).to.be.false;
        chai.expect(isEven(5)).to.be.false;
        chai.expect(isEven(7)).to.be.false;
        chai.expect(isEven(9)).to.be.false;
        chai.expect(isEven(11)).to.be.false;
        chai.expect(isEven(75)).to.be.false;
    });
});