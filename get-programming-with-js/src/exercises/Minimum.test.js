import * as chai from 'chai';
import min from "./Minimum";

describe('Minimum',()=>{
   it('should return min value',()=>{
        chai.expect(min(1,2)).to.be.equal(1);
        chai.expect(min(2,1)).to.be.equal(1);
        chai.expect(min(-1,1)).to.be.equal(-1);
        chai.expect(min(1,-1)).to.be.equal(-1);
        chai.expect(min(0,-1)).to.be.equal(-1);
        chai.expect(min(1,0)).to.be.equal(0);
   }) ;
});