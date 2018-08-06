const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('subs 1 - 2 to equals -1', () => {
    expect(calculator.sub(1, 2)).toBe(-1)
});