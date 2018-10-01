import * as chai from 'chai';
import {getChildrenWithMothers, groupChildrenPerMother, provideAncestry} from "./MotherChildAgeDifference";

describe('MotherChildAgeDifference', function () {
    it('should return children with theirs mothers', function () {
        const childrenWithMothers = getChildrenWithMothers(provideAncestry());
        chai.expect(childrenWithMothers.length).to.be.eql(18);
    });
});

