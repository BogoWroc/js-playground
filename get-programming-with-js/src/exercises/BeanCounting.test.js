import * as chai from 'chai';
import countBs, {countChar} from "./BeanCounting";

describe('BeanCounting', function () {
    it('should return count of letter B in string', function () {
        chai.expect(countBs("Bob Builder lives in beautiful Berlin!")).to.be.equal(3);
    });

    it('should return count of selected letter in string', function () {
        chai.expect(countChar("Bob Builder lives in beautiful Berlin!",'e')).to.be.equal(4);
        chai.expect(countChar("Bob Builder lives in beautiful Berlin!",'i')).to.be.equal(5);
    });
});