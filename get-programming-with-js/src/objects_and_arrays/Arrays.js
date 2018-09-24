console.log([1, 2, 3, 4].reduce((a, b) => a + b));

console.log(Array.of(50));

console.log(new Array(9).fill('Mr'));

const GRID = 'grid';
const LIST = 'list';
const availableOptions = [GRID, LIST];

let optionA = 'list';
let optionB = 'table';

console.log(availableOptions.includes(optionA));
console.log(availableOptions.includes(optionB));

function avg() {
    const args = Array.from(arguments);
    const sum = args.reduce(function (a, b) {
        return a + b;
    });
    return sum / args.length;
}

console.log(avg(1, 2, 3));
console.log(avg(100, 104));
console.log(avg(10, 99, 5, 46));