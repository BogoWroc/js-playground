/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
 */

export function fetchNumbers() {
    return Array.from(Array(100).keys()).map(x => ++x);
}

export function printNumbersAtConsole(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        printAtConsole(number);

    }
}

function printAtConsole(number) {
    if (isDivisibleBy(number, 3) && !isDivisibleBy(number, 5)) {
        console.log('Fizz');
    } else if (isDivisibleBy(number, 5) && !isDivisibleBy(number, 3)) {
        console.log('Buzz');
    } else if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5)) {
        console.log('FizzBuzz');
    }
    else {
        console.log(number);
    }
}

function isDivisibleBy(number, by) {
    return number % by === 0;
}


function main() {
    printNumbersAtConsole(fetchNumbers());
}

main();