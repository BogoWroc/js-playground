import {fetchNumbers} from "./FizzBuzz";


describe('FizzBuzz', () => {
    it('shouldReturnNumbersFrom1To100', () => {
        const numbers = fetchNumbers();
        expect(numbers.length).toStrictEqual(100);
        expect(numbers).toContain(1);
        expect(numbers).toContain(100);
    })
});