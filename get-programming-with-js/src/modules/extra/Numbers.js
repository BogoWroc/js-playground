export function add() {
    const arr = Array.from(arguments);
    return arr.reduce((a,b) => a+b );
}