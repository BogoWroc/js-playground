import * as chai from 'chai';
import range, {sum} from "./SumOfRange";

describe('The sum of range', function () {
    it('should return list of numbers from range', function () {
        chai.expect(range(1, 1)).to.be.eql([1]);
        chai.expect(range(0, 1)).to.be.eql([0, 1]);
        chai.expect(range(1, 10)).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        chai.expect(range(-2, 2)).to.be.eql([-2, -1, 0, 1, 2]);
    });

    it('should return sum of list elements', function () {
        chai.expect(sum(range(1, 10))).to.be.equal(55);
        chai.expect(sum(range(-2, 2))).to.be.equal(0);
    });

    it('should return list of numbers from range with defined step', function () {
        chai.expect(range(1, 10, 2)).to.be.eql([1, 3, 5, 7, 9]);
        chai.expect(range(5, 2, -1)).to.be.eql([5, 4, 3, 2]);
    });

});
