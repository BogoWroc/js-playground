import * as chai from 'chai';
import {reliableMultiply} from "./Retry";

describe('Retry', function () {
    it('should multiple two numbers without any exception', function () {
        chai.expect(reliableMultiply(1,2)).to.be.eql(2);
        chai.expect(reliableMultiply(1,0)).to.be.eql(0);
    });
});