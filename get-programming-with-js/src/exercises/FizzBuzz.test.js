import {fetchNumbers, printNumbersAtConsole} from "./FizzBuzz";
import * as sinon from "sinon";
import * as chai from 'chai';


describe('FizzBuzz', () => {

    let logSpy;

    beforeEach(() => {
        //Create a spy for the log function
        logSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        //Important final step - remove the spy
        logSpy.restore();

        // Restore the default sandbox here
        sinon.restore();
    });

    it('shouldReturnNumbersFrom1To100', () => {
        const numbers = fetchNumbers();

        //jest assertions
        expect(numbers.length).toStrictEqual(100);
        expect(numbers).toContain(1);
        expect(numbers).toContain(100);
    });

    describe("should print 'Fizz'",()=>{
        it('for numbers divisible by 3 (and not 5)', () => {

            printNumbersAtConsole([1, 2, 3, 6, 15]);

            chai.expect(logSpy.callCount).to.be.equal(5);

            chai.expect(logSpy.withArgs(1).calledOnce).to.be.true;
            chai.expect(logSpy.withArgs(2).calledOnce).to.be.true;
            chai.expect(logSpy.withArgs('Fizz').calledTwice).to.be.true;
            chai.expect(logSpy.withArgs(3).calledOnce).to.be.false;
            chai.expect(logSpy.withArgs(6).calledOnce).to.be.false;

        });
    });

    describe("should print 'Buzz'",()=>{
        it('for numbers divisible by 5 (and not 3)', () => {

            printNumbersAtConsole([5,10]);

            chai.expect(logSpy.callCount).to.be.equal(2);

            chai.expect(logSpy.withArgs('Buzz').calledTwice).to.be.true;
            chai.expect(logSpy.withArgs('Fizz').calledOnce).to.be.false;
            chai.expect(logSpy.withArgs(5).calledOnce).to.be.false;
            chai.expect(logSpy.withArgs(10).calledOnce).to.be.false;

        });
    });


    describe("should print 'FizzBuzz'",()=>{
        it('for numbers that are divisible by both 3 and 5', () => {

            printNumbersAtConsole([1,3,5,15]);

            chai.expect(logSpy.callCount).to.be.equal(4);

            chai.expect(logSpy.withArgs(1).calledOnce).to.be.true;
            chai.expect(logSpy.withArgs('Fizz').calledOnce).to.be.true;
            chai.expect(logSpy.withArgs('Buzz').calledOnce).to.be.true;
            chai.expect(logSpy.withArgs('FizzBuzz').calledOnce).to.be.true;
            chai.expect(logSpy.withArgs(3).calledOnce).to.be.false;
            chai.expect(logSpy.withArgs(5).calledOnce).to.be.false;
            chai.expect(logSpy.withArgs(15).calledOnce).to.be.false;

        });
    });

});