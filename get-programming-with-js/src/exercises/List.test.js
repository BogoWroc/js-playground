import * as chai from 'chai';
import {arrayToList, listToArray} from "./List";

describe('A list', function () {
    it('should convert array to list structure', function () {
        chai.expect(arrayToList([])).to.be.eql({});

        chai.expect(arrayToList([1])).to.be.eql({
            value: 1,
            rest: null
        });

        chai.expect(arrayToList([1, 2, 3])).to.be.eql({
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        });

        chai.expect(arrayToList([1, 2, 3, 4])).to.be.eql({
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: {
                        value: 4,
                        rest: null
                    }
                }
            }
        })
    });


    it('should convert list structure to array', function () {
        chai.expect(listToArray({})).to.be.eql([]);

        chai.expect(listToArray({
            value: 1,
            rest: null
        })).to.be.eql([1]);

        chai.expect(listToArray({
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        })).to.be.eql([1, 2, 3]);


    });
});