import * as chai from 'chai';
import flattening from "./Flattening";

describe('Flattening', function () {
    it('should flatten array of arrays into single array', function () {
        chai.expect(flattening([[1,2],[3],[],[4,5,6]])).to.be.eql([1,2,3,4,5,6]);
    });

});