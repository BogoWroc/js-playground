import * as chai from 'chai';
import {reverseArray, reverseArrayInPlace} from "./ReversingArray";

describe('Reversing an array', function () {
    it('should reverse Array by creating new Array', function () {
        chai.expect(reverseArray([1,2,3])).to.be.eql([3,2,1]);
    });

    it('should reverse Array in place', function () {
        chai.expect( reverseArrayInPlace([])).to.be.eql([]);
        chai.expect( reverseArrayInPlace([1])).to.be.eql([1]);
        chai.expect( reverseArrayInPlace([1,2])).to.be.eql([2,1]);
        chai.expect( reverseArrayInPlace([1,2,3])).to.be.eql([3,2,1]);
        chai.expect( reverseArrayInPlace([1,2,3,4,5])).to.be.eql([5,4,3,2,1]);
        chai.expect( reverseArrayInPlace([-1,2,-3,4])).to.be.eql([4,-3,2,-1]);
        chai.expect( reverseArrayInPlace([1,2,3,4])).to.be.eql([4,3,2,1]);
        chai.expect( reverseArrayInPlace([1,2,3,4,5,6])).to.be.eql([6,5,4,3,2,1]);
    });
});