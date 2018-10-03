import * as chai from 'chai';

describe('RegExp', function () {
    it('should return true when car or cat will be found in sentence', function () {
        chai.expect(/ca[rt]/.test('my car')).to.be.true;
        chai.expect(/ca[rt]/.test('black cat')).to.be.true;
        chai.expect(/ca[rt]/.test('some text')).to.be.false;
    });

    it('should return true when pop or prop will be found in sentence', function () {
        chai.expect(/pr?op/.test('my car')).to.be.false;
        chai.expect(/pr?op/.test('prop')).to.be.true;
        chai.expect(/pr?op/.test('pop')).to.be.true;
    });

    it('should return true when ferret, ferry, and ferrari will be found in sentence', function () {
        chai.expect(/ferr(et|y|ari)/.test('ferret')).to.be.true;
        chai.expect(/ferr(et|y|ari)/.test('ferry')).to.be.true;
        chai.expect(/ferr(et|y|ari)/.test('ferrari')).to.be.true;
    });

    it('should return true when word ending in ious', function () {
        chai.expect(/ious\b/.test('delicious')).to.be.true;
        chai.expect(/[a-z]+ious/.test('ambiguous')).to.be.false;
        chai.expect(/[a-z]+ious/.test('ambitious')).to.be.true;
    });

    it('should return true when a whitespace character followed by a dot, comma, colon, or semicolon', function () {
        chai.expect(/\s[.,:;]/.test('some text .')).to.be.true;
        chai.expect(/\s[.,:;]/.test('another text.')).to.be.false;
        chai.expect(/\s[.,:;]/.test('first ; second')).to.be.true;
    });


    it('should return true when a word longer than six letters', function () {
        chai.expect(/\w{7,}/.test('hottentottententen')).to.be.true;
    });

});