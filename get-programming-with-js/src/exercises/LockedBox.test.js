import * as chai from 'chai';
import {box, withBoxUnlocked} from "./LockedBox";

describe('LockedBox', function () {
    it('should report an error when box is locked', function () {
        box.lock();
        chai.expect(() => box.content).to.throw('Locked!');
    });

    it('should return content from box', function () {
        chai.expect(box.locked).to.be.true;

        chai.expect(withBoxUnlocked('test')).to.be.eql(['test']);
        chai.expect(box.locked).to.be.true;
    });
});