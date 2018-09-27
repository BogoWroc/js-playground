/*
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B”
characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates
the character that is to be counted (rather than counting only uppercase “B” characters).

Rewrite countBs to make use of this new function.
 */

export default function countBs(text) {
    return countChar(text, 'B');
}

export function countChar(text, char) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === char) {
            counter++;
        }
    }

    return counter;
}