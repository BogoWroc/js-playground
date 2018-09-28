/*
The Sum of a RangeThe introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the previous program and see whether it does indeed return 55.
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array.
If no step is given, the array elements go up by increments of one, corresponding to the old behavior.
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

export default function range(from, to, step = 1) {
    if (from > to && step < 0) {
        return down(from, to, step);
    } else if (from <= to) {
        return up(from, to, step);
    } else {
        return Array();
    }
}

export function sum(arrNumbers) {
    return arrNumbers.reduce((a, b) => a + b);
}

function up(from, to, step) {
    const list = Array();
    for (let i = from; i <= to; i = i + step) {
        list.push(i);
    }
    return list;
}

function down(from, to, step) {
    const list = Array();
    for (let i = from; i >= to; i = i + step) {
        list.push(i);
    }
    return list;
}