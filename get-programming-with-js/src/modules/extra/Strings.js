export function concat(strs, joiner = " ") {
    return strs.reduce((a, b) => a + joiner + b);
}