import * as chai from 'chai';
import {Vector} from "./Vector";


describe('Vector', function () {
    it('should be possible to pass two properties by constructor', function () {
        const vector = new Vector(10,20);
        chai.expect(vector.x).to.be.eql(10);
        chai.expect(vector.y).to.be.eql(20);
    });

    it('should be possible to add vectors', function () {
        const vector1 = new Vector(10,20);
        const vector2 = new Vector(5,10);
        const vector = vector1.plus(vector2);
        chai.expect(vector.x).to.be.eql(15);
        chai.expect(vector.y).to.be.eql(30);
    });

    it('should be possible to sub vectors', function () {
        const vector1 = new Vector(10,20);
        const vector2 = new Vector(5,10);
        const vector = vector1.minus(vector2);
        chai.expect(vector.x).to.be.eql(5);
        chai.expect(vector.y).to.be.eql(10);
    });

    it('should return length vector from (0,0)', function () {
        chai.expect(new Vector(3, 4).length).to.be.eql(5);
    });
});